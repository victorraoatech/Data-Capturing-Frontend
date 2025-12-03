'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';
import { MessageModal } from '@/app/components/MessageModal';
// import { toast as toastImport } from '@/app/components/hooks/use-toast'; // Commented out to avoid unused variable

// interface BodySection { // Commented out to avoid unused variable
//   sectionName: string;
//   measurements: Array<{
//     name: string;
//     value: string;
//   }>;
// }

const ObjectMeasurementOverview = () => {
  
  // const [isLoading, setIsLoading] = useState(false);
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info' as 'info' | 'success' | 'warning' | 'error'
  });

  const handleCreateNew = () => {
    
  };

  

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="relative min-h-screen w-full bg-[#FFFFFF]">
      <MeasurementTopNav/>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Message Modal */}
      <MessageModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        type={modalState.type}
      />

      {/* Overview Title */}
      <div 
        className="manrope"
        style={{
          position: 'absolute',
          top: '238px',
          left: '401px',
          fontSize: '20px',
          fontWeight: '600',
          color: '#1A1A1A'
        }}
      >
        Overview
      </div>

      {/* Create New Button */}
      <button
        onClick={handleCreateNew}
        className="flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
        style={{
          position: 'absolute',
          width: '143px',
          height: '40px',
          top: '288px',
          left: '1216px',
          borderRadius: '40px',
          background: '#5D2A8B',
          paddingTop: '9px',
          paddingRight: '8px',
          paddingBottom: '9px',
          paddingLeft: '8px',
          gap: '10px'
        }}
      >
        <div className="flex items-center" style={{ gap: '12px' }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M7 1V13M1 7H13" stroke="white" strokeWidth="2" strokeLinecap="round"/>
          </svg>
          <span 
            className="manrope"
            style={{
              fontSize: '16px',
              fontWeight: '500',
              lineHeight: '100%',
              color: '#FFFFFF',
              textAlign: 'center'
            }}
          >
            Create New
          </span>
        </div>
      </button>

      {/* Table Container */}
      <div
        style={{
          position: 'absolute',
          width: '958px',
          height: '547px',
          top: '351px',
          left: '401px',
          borderRadius: '20px',
          background: '#FFFFFF',
          opacity: 1
        }}
      >
        {/* Table Header */}
        <div
          style={{
            width: '893px',
            height: '51px',
            position: 'absolute',
            top: '59px',
            left: '33px'
          }}
        >
          <div style={{ display: 'flex', gap: '10px' }}>
            {['Name', 'Measurement\nType', 'Chest/\nBust (cm)', 'Waist/\nMid (cm)', 'Hips/\nHips (cm)', 'Inseam (cm)'].map((header, index) => (
              <div
                key={index}
                className="manrope"
                style={{
                  width: '139px',
                  height: '51px',
                  paddingTop: '4px',
                  paddingRight: '10px',
                  paddingBottom: '16px',
                  paddingLeft: '10px',
                  fontSize: '14px',
                  fontWeight: '500',
                  color: '#6E6E6E',
                  opacity: '0.7',
                  whiteSpace: 'pre-line',
                  lineHeight: '140%',
                  borderBottom: '1px solid #E4D8F3'
                }}
              >
                {header}
              </div>
            ))}
          </div>
        </div>

        {/* Empty State Container */}
        <div
          style={{
            width: '402px',
            height: '251px',
            position: 'absolute',
            top: '183px',
            left: '278px'
          }}
        >
          {/* Icon Container */}
          <div
            style={{
              width: '160px',
              height: '168px',
              position: 'relative',
              left: '121px',
              opacity: '0.5'
            }}
          >
            <Image
              width={60}
              height={60}
              alt=''
              src="/File Streamline Solar Broken.png"
              className="absolute top-[54px] left-[50px]"
            />
          </div>

          {/* No Measurement Text Container */}
          <div
            style={{
              width: '402px',
              height: '66px',
              position: 'absolute',
              top: '185px',
              gap: '6px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}
          >
            <div
              className="manrope"
              style={{
                width: '402px',
                height: '22px',
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '100%',
                textAlign: 'center',
                color: '#1A1A1A'
              }}
            >
              No measurements recorded yet!
            </div>
            <div
              className="manrope"
              style={{
                width: '402px',
                height: '38px',
                fontSize: '14px',
                fontWeight: '500',
                lineHeight: '135%',
                textAlign: 'center',
                color: '#6E6E6E',
                opacity: '0.7'
              }}
            >
              There is nothing to view right now, create a body measurement to see here
            </div>
          </div>
        </div>
      </div>

    

      
    </div>
  );
};

export default ObjectMeasurementOverview;