'use client';

import React from 'react';
import { X } from 'lucide-react';

interface MessageModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  message: string;
  type?: 'info' | 'success' | 'warning' | 'error';
}

export const MessageModal: React.FC<MessageModalProps> = ({
  isOpen,
  onClose,
  title,
  message,
  type = 'info'
}) => {
  if (!isOpen) return null;

  const getTypeStyles = () => {
    switch (type) {
      case 'success':
        return {
          border: '1px solid #10B981',
          iconColor: '#10B981'
        };
      case 'warning':
        return {
          border: '1px solid #F59E0B',
          iconColor: '#F59E0B'
        };
      case 'error':
        return {
          border: '1px solid #EF4444',
          iconColor: '#EF4444'
        };
      case 'info':
      default:
        return {
          border: '1px solid #3B82F6',
          iconColor: '#3B82F6'
        };
    }
  };

  const styles = getTypeStyles();

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{
          background: 'rgba(0, 0, 0, 0.4)',
          zIndex: 9998,
        }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="fixed"
        style={{
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: '400px',
          background: '#FFFFFF',
          borderRadius: '20px',
          zIndex: 9999,
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          padding: '0',
          border: styles.border
        }}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '24px 24px 0 24px',
            borderBottom: 'none',
          }}
        >
          <h2
            style={{
              fontFamily: 'Manrope',
              fontWeight: 600,
              fontSize: '20px',
              color: '#1A1A1A',
              margin: 0,
            }}
          >
            {title}
          </h2>
          <button
            onClick={onClose}
            style={{
              background: '#FBFAFC',
              border: 'none',
              width: '40px',
              height: '40px',
              borderRadius: '40px',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: 0,
            }}
            type="button"
          >
            <X className="w-5 h-5" style={{ color: '#1A1A1A' }} />
          </button>
        </div>

        {/* Content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            padding: '24px',
          }}
        >
          <p
            style={{
              fontFamily: 'Manrope',
              fontWeight: 400,
              fontSize: '16px',
              color: '#6E6E6E',
              margin: 0,
              lineHeight: '1.5',
            }}
          >
            {message}
          </p>

          {/* Buttons */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              marginTop: '24px',
            }}
          >
            <button
              onClick={onClose}
              style={{
                width: '80px',
                height: '38px',
                borderRadius: '20px',
                background: '#5D2A8B',
                border: 'none',
                fontFamily: 'Manrope',
                fontWeight: 500,
                fontSize: '16px',
                color: '#FFFFFF',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#4A1F70';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#5D2A8B';
              }}
              type="button"
            >
              OK
            </button>
          </div>
        </div>
      </div>
    </>
  );
};