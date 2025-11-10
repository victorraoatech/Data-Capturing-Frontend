'use client';

import React from 'react';
import Image from 'next/image';
import { Search, Bell, ChevronDown } from 'lucide-react';

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
        {/* Top Right Controls - Search, Notification, Avatar */}
        <div 
          className="absolute flex items-center gap-3 z-30"
          style={{
            top: '20px',
            right: '24px'
          }}
        >
          {/* Search */}
          <div 
            className="bg-white flex items-center"
            style={{
              width: '285px',
              height: '40px',
              borderRadius: '40px',
              border: '1px solid #E4D8F3',
              paddingLeft: '16px',
              paddingRight: '16px',
              gap: '8px'
            }}
          >
            <Search className="w-5 h-5 text-gray-400" />
            <input 
              type="text" 
              placeholder="Search" 
              className="manrope flex-1 outline-none bg-transparent text-sm"
              style={{ color: '#6E6E6E' }}
            />
          </div>

          {/* Notification */}
          <button 
            className="bg-[#FBFAFC] flex items-center justify-center hover:bg-gray-100"
            style={{
              width: '40px',
              height: '40px',
              borderRadius: '40px',
              border: '1px solid #E4D8F3'
            }}
          >
            <Bell className="w-5 h-5 text-gray-600" />
          </button>

          {/* Avatar */}
          <div className="relative">
            <div 
              className="flex items-center cursor-pointer"
              style={{
                width: '68px',
                height: '40px',
                gap: '6px'
              }}
            >
              {/* Avatar Image */}
              <div 
                className="relative overflow-hidden"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '40px',
                  background: '#6D1E1E'
                }}
              >
                <Image 
                  src="/Frame 1707479300.png" 
                  alt="User Avatar" 
                  width={40} 
                  height={40}
                  className="object-cover"
                />
              </div>

              {/* Dropdown Icon */}
              <ChevronDown 
                className="text-gray-600"
                style={{
                  width: '22px',
                  height: '22px'
                }}
              />
            </div>
          </div>
        </div>

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