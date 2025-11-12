'use client';

import React from 'react';
import Image from 'next/image';
import { UserTopBar } from './user-topbar';

interface MeasurementData {
  chest: string;
  waist: string;
  hips: string;
  legs: string;
}

interface MeasurementTopNavProps {
  measurements?: MeasurementData;
  title?: string;
}

export const MeasurementTopNav: React.FC<MeasurementTopNavProps> = ({ 
  measurements = {
    chest: '8cm',
    waist: '10cm', 
    hips: '35cm',
    legs: '35cm'
  },
  title = 'Current body measurement'
}) => {
  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* User TopBar with Search, Notification, and Avatar */}
      <UserTopBar />

      <div 
        className="absolute bg-white overflow-visible z-20 shadow-sm"
        style={{
          width: '958px',
          height: '129px',
          top: '80px',
          left: '401px',
          borderRadius: '20px',
          padding: '24px',
          position: 'relative'
        }}
      >

        <div className="flex flex-col justify-center h-full">
          {/* Current Body Measurement Label */}
          <div className="manrope text-sm text-gray-400 mb-3">{title}</div>
          
          {/* Measurement Tabs */}
          <div className="flex gap-4 items-center">
            <button className="manrope text-sm text-gray-600 hover:text-purple-700 flex flex-col items-center">
              <span>{measurements.chest}</span>
              <span>Chest</span>
            </button>
            <button className="manrope text-sm text-gray-600 hover:text-purple-700 flex flex-col items-center">
              <span>{measurements.waist}</span>
              <span>Waist</span>
            </button>
            <button className="manrope text-sm text-gray-600 hover:text-purple-700 flex flex-col items-center">
              <span>{measurements.hips}</span>
              <span>Hips</span>
            </button>
            <button className="manrope text-sm text-gray-600 hover:text-purple-700 flex flex-col items-center">
              <span>{measurements.legs}</span>
              <span>Legs</span>
            </button>
            <button 
              className="manrope text-sm text-purple-700 font-medium flex flex-col items-center"
              style={{
                width: '29px',
                height: '36px',
                gap: '4px'
              }}
            >
              <Image 
                src="/Copy Streamline Bootstrap.png" 
                alt="Copy" 
                width={16} 
                height={16}
                className="object-contain"
              />
              <span>Copy</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};