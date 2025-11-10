'use client';

import React from 'react';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';

const BodyMeasurementPage = () => {
  return (
    <div className="min-h-screen bg-white p-0">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Top Navigation with Body Measurement specific data */}
      <MeasurementTopNav 
        title="Current body measurement"
        measurements={{
          chest: '8cm',
          waist: '10cm',
          hips: '35cm',
          legs: '35cm'
        }}
      />

      {/* Body Measurement Content */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          top: '271px',
          left: '401px'
        }}
      >
        <h1 className="manrope text-3xl font-semibold text-gray-800 mb-6">
          Body Measurement
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Current Measurements</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Chest:</span>
                  <span className="manrope font-medium">8cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Waist:</span>
                  <span className="manrope font-medium">10cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Hips:</span>
                  <span className="manrope font-medium">35cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Legs:</span>
                  <span className="manrope font-medium">35cm</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="manrope w-full bg-purple-600 text-white py-2 px-4 rounded-lg hover:bg-purple-700">
                  Take New Measurement
                </button>
                <button className="manrope w-full border border-purple-600 text-purple-600 py-2 px-4 rounded-lg hover:bg-purple-50">
                  View History
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurementPage;