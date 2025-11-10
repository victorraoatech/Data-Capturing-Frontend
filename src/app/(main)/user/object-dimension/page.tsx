'use client';

import React from 'react';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';

const ObjectDimensionPage = () => {
  return (
    <div className="min-h-screen bg-white p-0">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Top Navigation with Object Dimension specific data */}
      <MeasurementTopNav 
        title="Current object dimensions"
        measurements={{
          chest: '20cm',
          waist: '15cm',
          hips: '25cm',
          legs: '30cm'
        }}
      />

      {/* Object Dimension Content */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          top: '271px',
          left: '401px'
        }}
      >
        <h1 className="manrope text-3xl font-semibold text-gray-800 mb-6">
          Object Measurement
        </h1>
        
        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-2 gap-6">
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Current Object Dimensions</h3>
              <div className="space-y-3">
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Length:</span>
                  <span className="manrope font-medium">20cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Width:</span>
                  <span className="manrope font-medium">15cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Height:</span>
                  <span className="manrope font-medium">25cm</span>
                </div>
                <div className="flex justify-between">
                  <span className="manrope text-gray-600">Depth:</span>
                  <span className="manrope font-medium">30cm</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="manrope text-lg font-medium text-gray-800 mb-4">Actions</h3>
              <div className="space-y-3">
                <button className="manrope w-full bg-orange-600 text-white py-2 px-4 rounded-lg hover:bg-orange-700">
                  Scan New Object
                </button>
                <button className="manrope w-full border border-orange-600 text-orange-600 py-2 px-4 rounded-lg hover:bg-orange-50">
                  View Object Library
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ObjectDimensionPage;