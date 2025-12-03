'use client';

import React, { useState } from 'react';
import { X, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';

interface Question {
  id: string;
  text: string;
  type?: string;
}

interface Section {
  id: string;
  name: string;
  questions: Question[];
}

interface CreateQuestionnaireModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit?: (data: QuestionnaireData) => void;
}

interface QuestionnaireData {
  title: string;
  description: string;
  sendTo: string;
  sections: Section[];
}

export const CreateQuestionnaireModal: React.FC<CreateQuestionnaireModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    title: '',
    description: '',
    sendTo: '',
    sections: [
      {
        id: '1',
        name: 'SECTION 1',
        questions: [
          { id: '1', text: '', type: '' },
          { id: '2', text: '', type: '' },
          { id: '3', text: '', type: '' },
          { id: '4', text: '', type: '' },
        ],
      },
    ],
  });

  const [activeDropdown, setActiveDropdown] = useState<{sectionId: string, questionId: string} | null>(null);

  if (!isOpen) return null;

  const handleAddQuestion = (sectionId: string) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            questions: [
              ...section.questions,
              { id: Date.now().toString(), text: '', type: '' },
            ],
          };
        }
        return section;
      }),
    }));
  };

  const handleAddSection = () => {
    const newSectionId = Date.now().toString();
    setFormData(prev => ({
      ...prev,
      sections: [
        ...prev.sections,
        {
          id: newSectionId,
          name: `SECTION ${prev.sections.length + 1}`,
          questions: [{ id: '1', text: '', type: '' }],
        },
      ],
    }));
  };

  const handleRemoveSection = (sectionId: string) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.filter(s => s.id !== sectionId),
    }));
  };

  const handleUpdateQuestion = (
    sectionId: string,
    questionId: string,
    text: string
  ) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            questions: section.questions.map(q =>
              q.id === questionId ? { ...q, text } : q
            ),
          };
        }
        return section;
      }),
    }));
  };

  const handleUpdateQuestionType = (
    sectionId: string,
    questionId: string,
    type: string
  ) => {
    setFormData(prev => ({
      ...prev,
      sections: prev.sections.map(section => {
        if (section.id === sectionId) {
          return {
            ...section,
            questions: section.questions.map(q =>
              q.id === questionId ? { ...q, type } : q
            ),
          };
        }
        return section;
      }),
    }));
    setActiveDropdown(null);
  };

  const handleDraft = () => {
    console.log('Draft saved:', formData);
  };

  const handleSave = () => {
    if (onSubmit) {
      onSubmit(formData);
    }
    onClose();
  };

  const toggleDropdown = (sectionId: string, questionId: string) => {
    if (activeDropdown && activeDropdown.sectionId === sectionId && activeDropdown.questionId === questionId) {
      setActiveDropdown(null);
    } else {
      setActiveDropdown({ sectionId, questionId });
    }
  };

  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50 overflow-y-auto py-8">
      <div
        className="bg-white rounded-[12px] shadow-2xl relative"
        style={{
          width: '540px',
          minHeight: '600px',
        }}
      >
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
          .manrope { font-family: 'Manrope', sans-serif; }
        `}</style>

        {/* Modal Header */}
        <div
          className="flex items-center justify-between p-6 border-b border-gray-200 sticky top-0 bg-white rounded-t-[12px]"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          <h2
            className="manrope text-lg font-semibold text-gray-900"
            style={{
              fontSize: '16px',
              fontWeight: 600,
              color: '#1A1A1A'
            }}
          >
            Create Questionnaire
          </h2>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-600 bg-[#FBFAFC] rounded-[40px]"
            style={{ width: '50px', height: '50px' }}
          >
            <X className="w-5 h-5 mx-auto" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 space-y-6 overflow-y-auto" style={{ maxHeight: 'calc(100vh - 200px)', paddingLeft: '24px', paddingRight: '24px' }}>

          {/* Form ID */}
          <div className="flex justify-end">
            <span className="manrope text-xs text-gray-500">Form ID:</span>
            <span 
              className="manrope text-xs font-medium text-gray-900 ml-2 border border-[#6E6E6E4D] rounded-[5px] px-3 py-1"
              style={{ 
                width: '108px', 
                height: '38px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}
            >
              OLG501-203
            </span>
          </div>

          {/* Title */}
          <div>
            <label className="manrope block text-sm font-medium text-gray-900 mb-2">
              Title
            </label>
            <input
              type="text"
              placeholder="Name of Questionnaire"
              value={formData.title}
              onChange={(e) =>
                setFormData({ ...formData, title: e.target.value })
              }
              className="manrope w-full px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              style={{ height: '40px' }}
            />
          </div>

          {/* Description */}
          <div>
            <label className="manrope block text-sm font-medium text-gray-900 mb-2">
              Description
            </label>
            <input
              type="text"
              placeholder="Description"
              value={formData.description}
              onChange={(e) =>
                setFormData({ ...formData, description: e.target.value })
              }
              className="manrope w-full px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
              style={{ height: '40px' }}
            />
          </div>

          {/* Send To */}
          <div 
            className="space-y-4"
            style={{ width: '345px', height: '95px' }}
          >
            <label className="manrope block text-sm font-medium text-gray-900 mb-2">
              Send To
            </label>
            <select
              value={formData.sendTo}
              onChange={(e) =>
                setFormData({ ...formData, sendTo: e.target.value })
              }
              className="manrope w-full px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm bg-white"
              style={{ height: '40px' }}
            >
              <option value="">Individuals</option>
              <option value="group">Group</option>
              <option value="all">All</option>
            </select>
          </div>

          {/* Sections and Questions */}
          <div 
            className="space-y-6 p-4 bg-[#FBFAFC] rounded-[8px]"
            style={{ width: '801px', height: '405px' }}
          >
            {formData.sections.map((section) => (
              <div key={section.id} className="space-y-4">
                {/* Section Header */}
                <div className="flex items-center justify-between">
                  <h3
                    className="manrope text-xs font-semibold text-gray-900"
                    style={{
                      fontSize: '12px',
                      fontWeight: 600,
                      color: '#1A1A1A',
                      letterSpacing: '0.5px'
                    }}
                  >
                    {section.name}
                  </h3>
                  {formData.sections.length > 1 && (
                    <button
                      type="button"
                      onClick={() => handleRemoveSection(section.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>

                {/* Questions Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {section.questions.map((question, questionIndex) => (
                    <div key={question.id} className="relative">
                      <label className="manrope block text-xs font-medium text-gray-700 mb-1.5">
                        Question {questionIndex + 1}
                      </label>
                      <div className="relative flex items-center gap-2">
                        <input
                          type="text"
                          placeholder={`Question ${questionIndex + 1}`}
                          value={question.text}
                          onChange={(e) =>
                            handleUpdateQuestion(
                              section.id,
                              question.id,
                              e.target.value
                            )
                          }
                          className="manrope w-full px-3 py-2 border border-gray-300 rounded-[8px] focus:ring-2 focus:ring-purple-500 focus:border-transparent text-sm"
                          style={{ height: '40px' }}
                        />
                        <button
                          type="button"
                          onClick={() => toggleDropdown(section.id, question.id)}
                          className="flex-shrink-0"
                        >
                          <Image 
                            src="/delete.png" 
                            alt="Question type" 
                            width={24} 
                            height={24}
                          />
                        </button>
                        
                        {/* Dropdown for question type */}
                        {activeDropdown && 
                         activeDropdown.sectionId === section.id && 
                         activeDropdown.questionId === question.id && (
                          <div 
                            className="absolute right-0 top-full mt-1 z-10 bg-white rounded-[20px] shadow-lg border border-gray-200"
                            style={{
                              width: '108px',
                              padding: '28px 11px',
                              boxShadow: '0px 2px 8px 0px #5D2A8B1A'
                            }}
                          >
                            <div className="flex flex-col gap-3">
                              <button
                                type="button"
                                onClick={() => handleUpdateQuestionType(section.id, question.id, 'paragraph')}
                                className="manrope text-xs text-gray-700 hover:text-purple-600 text-center"
                              >
                                Paragraph
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdateQuestionType(section.id, question.id, 'dropdown')}
                                className="manrope text-xs text-gray-700 hover:text-purple-600 text-center"
                              >
                                Dropdown
                              </button>
                              <button
                                type="button"
                                onClick={() => handleUpdateQuestionType(section.id, question.id, 'multiselect')}
                                className="manrope text-xs text-gray-700 hover:text-purple-600 text-center"
                              >
                                Multiselect
                              </button>
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Add New Field Button */}
                <button
                  type="button"
                  onClick={() => handleAddQuestion(section.id)}
                  className="manrope text-purple-600 text-lg font-medium flex items-center gap-3 hover:text-purple-700 mt-2"
                  style={{
                    width: '149px',
                    height: '25px'
                  }}
                >
                  <Plus className="w-5 h-5" />
                  <span className="text-[18px]">Add New Field</span>
                </button>
              </div>
            ))}
          </div>

          {/* Add New Section Button */}
          <button
            type="button"
            onClick={handleAddSection}
            className="manrope text-purple-600 text-xs font-medium flex items-center gap-1.5 hover:text-purple-700"
          >
            <Plus className="w-4 h-4" />
            Add New Section
          </button>
        </div>

        {/* Modal Footer */}
        <div
          className="flex justify-end gap-3 p-6 border-t border-gray-200 bg-gray-50/50 sticky bottom-0 rounded-b-[12px]"
          style={{ paddingLeft: '24px', paddingRight: '24px' }}
        >
          <button
            type="button"
            onClick={handleDraft}
            className="manrope px-6 py-2 text-gray-700 border border-gray-300 rounded-full hover:bg-gray-50 transition-colors font-medium text-sm"
            style={{
              borderRadius: '24px',
              borderColor: '#CCCCCC'
            }}
          >
            Draft
          </button>
          <button
            type="button"
            onClick={handleSave}
            className="manrope px-6 py-2 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-colors font-medium text-sm"
            style={{
              borderRadius: '24px',
              backgroundColor: '#5D2A8B'
            }}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

// Default export for Next.js page requirement
export default function CreateQuestionnairePage() {
  return (
    <div>
      <h1>Create Questionnaire Page</h1>
      <p>This route is handled by the modal component.</p>
    </div>
  );
}