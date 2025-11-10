'use client';

import React from 'react';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';

const QuestionnairePage = () => {
  return (
    <div className="min-h-screen bg-white p-0">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Top Navigation - Same as other modules */}
      <MeasurementTopNav 
        title="Current questionnaire data"
        measurements={{
          chest: '8cm',
          waist: '10cm',
          hips: '35cm',
          legs: '35cm'
        }}
      />

      {/* Questionnaire Content */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          top: '271px',
          left: '401px'
        }}
      >
        <h1 className="manrope text-3xl font-semibold text-gray-800 mb-6">
          Questionnaire
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Active Questionnaires</h3>
              <div className="space-y-3">
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="manrope font-medium">Customer Feedback</span>
                    <span className="manrope text-sm text-green-600">Active</span>
                  </div>
                  <p className="manrope text-sm text-gray-600 mt-1">8 responses</p>
                </div>
                <div className="p-3 border border-gray-200 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className="manrope font-medium">Product Survey</span>
                    <span className="manrope text-sm text-green-600">Active</span>
                  </div>
                  <p className="manrope text-sm text-gray-600 mt-1">12 responses</p>
                </div>
              </div>
            </div>
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="manrope w-full bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700">
                  Create New Questionnaire
                </button>
                <button className="manrope w-full border border-red-600 text-red-600 py-2 px-4 rounded-lg hover:bg-red-50">
                  View All Responses
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionnairePage;