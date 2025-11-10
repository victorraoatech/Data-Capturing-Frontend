'use client';

import React from 'react';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewMeasurement: () => void;
  onEditMeasurement: () => void;
  onDelete: () => void;
  position: { top: number; left: number };
}

const ActionModal: React.FC<ActionModalProps> = ({
  isOpen,
  onClose,
  onViewMeasurement,
  onEditMeasurement,
  onDelete,
  position
}) => {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 z-40" 
        onClick={onClose}
      />
      
      {/* Modal */}
      <div 
        className="fixed bg-white shadow-lg rounded-lg z-50"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          width: '155px',
          borderRadius: '20px',
          padding: '16px',
          boxShadow: '0px 2px 8px 0px #5D2A8B1A',
          border: '1px solid #E4D8F3'
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <style jsx>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
          .manrope { font-family: 'Manrope', sans-serif; }
        `}</style>
        
        <div className="flex flex-col gap-2">
          <button 
            className="manrope text-left hover:bg-gray-50 p-2 rounded transition-colors"
            style={{
              fontSize: '14px',
              color: '#1A1A1A',
              border: 'none',
              background: 'none',
              width: '100%'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onViewMeasurement();
              onClose();
            }}
          >
            View Measurement
          </button>
          
          <button 
            className="manrope text-left hover:bg-gray-50 p-2 rounded transition-colors"
            style={{
              fontSize: '14px',
              color: '#1A1A1A',
              border: 'none',
              background: 'none',
              width: '100%'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onEditMeasurement();
              onClose();
            }}
          >
            Edit Measurement
          </button>
          
          <button 
            className="manrope text-left hover:bg-gray-50 p-2 rounded transition-colors"
            style={{
              fontSize: '14px',
              color: '#FF6161',
              border: 'none',
              background: 'none',
              width: '100%'
            }}
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
              onClose();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default ActionModal;