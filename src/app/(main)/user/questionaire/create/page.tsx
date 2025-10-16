// app/(main)/user/questionnaires/[id]/page.tsx
"use client";

import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { ArrowLeft, FileText, Calendar, Edit, Users, Mail } from "lucide-react";

import Link from "next/link";
import { Questionnaire } from "../../../../../../types";

// Mock data
const mockQuestionnaire: Questionnaire = {
  _id: "1",
  title: "Customer Feedback Survey",
  description: "General customer satisfaction survey for our services to gather valuable feedback and improve our offerings.",
  formId: "FORM-FEEDBACK-001",
  sendToIndividual: "john.doe@example.com",
  sendToGroup: ["customers", "subscribers", "vip-clients"],
  sections: [
    {
      id: "section1",
      name: "Personal Information",
      fields: [
        { id: "field1", label: "Full Name", type: "text", required: true },
        { id: "field2", label: "Email Address", type: "email", required: true },
        { id: "field3", label: "Phone Number", type: "text", required: false },
      ]
    },
    {
      id: "section2",
      name: "Service Feedback",
      fields: [
        { id: "field4", label: "Service Rating", type: "select", required: true, options: ["1 - Poor", "2 - Fair", "3 - Good", "4 - Very Good", "5 - Excellent"] },
        { id: "field5", label: "How did you hear about us?", type: "select", required: false, options: ["Social Media", "Friend Referral", "Advertisement", "Search Engine", "Other"] },
        { id: "field6", label: "Additional Comments", type: "textarea", required: false },
      ]
    }
  ],
  status: "active",
  createdAt: new Date().toISOString(),
  updatedAt: new Date().toISOString(),
};

interface DetailPageProps {
  params: {
    id: string;
  };
}

export default function QuestionnaireDetailPage({ params }: DetailPageProps) {
  const router = useRouter();
  const { id } = params;

  const { data: questionnaire, isLoading } = useQuery({
    queryKey: ["questionnaire", id],
    queryFn: async () => {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      return mockQuestionnaire;
    },
  });

  if (isLoading) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#EAAB40] mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading questionnaire details...</p>
        </div>
      </div>
    );
  }

  if (!questionnaire) {
    return (
      <div className="w-full min-h-screen bg-gray-50 p-4 flex items-center justify-center">
        <div className="text-center text-red-600">
          <p>Questionnaire not found.</p>
          <button 
            onClick={() => router.push("/user/questionnaires")}
            className="mt-4 bg-[#EAAB40] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
          >
            Back to Questionnaires
          </button>
        </div>
      </div>
    );
  }

  const totalFields = questionnaire.sections.reduce((total, section) => total + section.fields.length, 0);

  return (
    <div className="w-full min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={() => router.push("/user/questionnaires")}
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Back to Questionnaires
            </button>
            
            <Link
              href={`/user/questionnaires/create?edit=${questionnaire._id}`}
              className="flex items-center gap-2 bg-[#EAAB40] text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors"
            >
              <Edit className="w-4 h-4" />
              Edit
            </Link>
          </div>
          
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
            <div className="flex items-start justify-between">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-[#EAAB40] bg-opacity-10 rounded-lg">
                  <FileText className="w-8 h-8 text-[#EAAB40]" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">
                    {questionnaire.title}
                  </h1>
                  <p className="text-gray-600 mt-2 text-lg">{questionnaire.description}</p>
                  <div className="flex items-center gap-4 mt-3">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      questionnaire.status === 'active' 
                        ? 'bg-green-100 text-green-800 border border-green-200'
                        : questionnaire.status === 'draft'
                        ? 'bg-yellow-100 text-yellow-800 border border-yellow-200'
                        : 'bg-gray-100 text-gray-800 border border-gray-200'
                    }`}>
                      {questionnaire.status.charAt(0).toUpperCase() + questionnaire.status.slice(1)}
                    </span>
                    <div className="flex items-center gap-1 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4" />
                      Created {new Date(questionnaire.createdAt).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-4 gap-8">
          {/* Main Content - 3/4 width */}
          <div className="xl:col-span-3 space-y-8">
            {/* Questionnaire Overview */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Questionnaire Overview
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg border border-blue-100">
                  <div className="text-2xl font-bold text-blue-900">{questionnaire.sections.length}</div>
                  <div className="text-sm font-medium text-blue-700">Sections</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg border border-green-100">
                  <div className="text-2xl font-bold text-green-900">{totalFields}</div>
                  <div className="text-sm font-medium text-green-700">Total Fields</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-100">
                  <div className="text-2xl font-bold text-purple-900">
                    {questionnaire.sections.reduce((count, section) => 
                      count + section.fields.filter(field => field.required).length, 0
                    )}
                  </div>
                  <div className="text-sm font-medium text-purple-700">Required Fields</div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Form ID
                  </label>
                  <p className="text-gray-900 text-lg font-mono font-semibold">{questionnaire.formId}</p>
                </div>
                
                <div className="space-y-1">
                  <label className="block text-sm font-medium text-gray-700">
                    Last Updated
                  </label>
                  <p className="text-gray-900 text-lg">
                    {new Date(questionnaire.updatedAt).toLocaleDateString()}
                  </p>
                </div>
              </div>
            </div>

            {/* Sections */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-6 pb-3 border-b border-gray-200">
                Questionnaire Sections
              </h3>
              
              <div className="space-y-6">
                {questionnaire.sections.map((section, sectionIndex) => (
                  <div key={section.id} className="bg-gray-50 rounded-lg p-6 border border-gray-200">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-3">
                      <span className="flex items-center justify-center w-6 h-6 bg-[#EAAB40] text-white rounded-full text-sm">
                        {sectionIndex + 1}
                      </span>
                      {section.name}
                    </h4>

                    {/* Fields */}
                    <div className="space-y-4">
                      {section.fields.map((field, fieldIndex) => (
                        <div key={field.id} className="bg-white p-4 rounded-lg border border-gray-200">
                          <div className="flex items-start gap-4">
                            <span className="flex items-center justify-center w-6 h-6 bg-gray-100 text-gray-600 rounded text-sm font-medium mt-1">
                              {fieldIndex + 1}
                            </span>
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="text-lg font-medium text-gray-900">
                                  {field.label}
                                </span>
                                {field.required && (
                                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs font-medium rounded">
                                    Required
                                  </span>
                                )}
                                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded capitalize">
                                  {field.type}
                                </span>
                              </div>
                              
                              {field.type === 'select' && field.options && (
                                <div className="mt-2">
                                  <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Options:
                                  </label>
                                  <div className="flex flex-wrap gap-2">
                                    {field.options.map((option, optionIndex) => (
                                      <span
                                        key={optionIndex}
                                        className="px-3 py-1 bg-green-100 text-green-800 text-sm rounded-full border border-green-200"
                                      >
                                        {option}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar - 1/4 width */}
          <div className="space-y-8">
            {/* Recipients */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Users className="w-5 h-5 text-[#EAAB40]" />
                Recipients
              </h3>
              
              <div className="space-y-4">
                {questionnaire.sendToIndividual && (
                  <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg border border-blue-100">
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-blue-600" />
                      <span className="text-sm font-medium text-blue-700">Individual</span>
                    </div>
                    <span className="text-sm text-blue-900 truncate max-w-[120px]">
                      {questionnaire.sendToIndividual}
                    </span>
                  </div>
                )}
                
                {questionnaire.sendToGroup.length > 0 && (
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Groups ({questionnaire.sendToGroup.length})
                    </label>
                    <div className="space-y-2">
                      {questionnaire.sendToGroup.map((group, index) => (
                        <div
                          key={index}
                          className="flex items-center gap-2 p-2 bg-green-50 rounded border border-green-100"
                        >
                          <Users className="w-4 h-4 text-green-600" />
                          <span className="text-sm text-green-800 capitalize">{group}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Quick Actions
              </h3>
              
              <div className="space-y-3">
                <Link
                  href={`/user/questionnaires/create?edit=${questionnaire._id}`}
                  className="w-full flex items-center justify-center gap-2 bg-[#EAAB40] text-white px-4 py-3 rounded-lg hover:bg-orange-500 transition-colors font-medium"
                >
                  <Edit className="w-4 h-4" />
                  Edit Questionnaire
                </Link>
                
                <button
                  onClick={() => router.push("/user/questionnaires")}
                  className="w-full flex items-center justify-center gap-2 border border-gray-300 text-gray-700 px-4 py-3 rounded-lg hover:bg-gray-50 transition-colors font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Back to List
                </button>
              </div>
            </div>

            {/* Metadata */}
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-200">
              <h3 className="text-xl font-semibold text-gray-800 mb-4">
                Metadata
              </h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Created Date</span>
                    <span className="block text-sm text-gray-500">
                      {new Date(questionnaire.createdAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Last Updated</span>
                    <span className="block text-sm text-gray-500">
                      {new Date(questionnaire.updatedAt).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                  <Calendar className="w-5 h-5 text-gray-400" />
                </div>
                
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div>
                    <span className="block text-sm font-medium text-gray-700">Questionnaire ID</span>
                    <span className="block text-sm text-gray-500 font-mono">{questionnaire._id}</span>
                  </div>
                  <FileText className="w-5 h-5 text-gray-400" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}