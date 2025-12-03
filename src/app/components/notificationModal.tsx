'use client';

import React from 'react';
import { X } from 'lucide-react';

interface Notification {
  id: string;
  title: string;
  time: string;
  category: 'today' | 'last-week';
  isHighlighted?: boolean;
}

interface NotificationPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

export const NotificationPanel = ({ isOpen, onClose }: NotificationPanelProps) => {
  const [notifications] = React.useState<Notification[]>([
    {
      id: '1',
      title: 'Body Measurement taken',
      time: '11:10AM',
      category: 'today',
      isHighlighted: true,
    },
    {
      id: '2',
      title: 'Welcome to Data Capturing!',
      time: '11:10AM',
      category: 'last-week',
      isHighlighted: false,
    },
    {
      id: '3',
      title: 'Welcome to Data Capturing!',
      time: '11:10AM',
      category: 'last-week',
      isHighlighted: false,
    },
  ]);

  const todayNotifications = notifications.filter((n) => n.category === 'today');
  const lastWeekNotifications = notifications.filter((n) => n.category === 'last-week');

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0"
        style={{
          background: 'transparent',
          zIndex: 9998,
        }}
        onClick={onClose}
      />

      {/* Notification Panel */}
      <div
        className="fixed"
        style={{
          top: '181px',
          left: '910px',
          width: '449px',
          height: '346px',
          background: '#FFFFFF',
          borderRadius: '20px',
          zIndex: 9999,
          boxShadow: '0px 2px 8px 0px rgba(93, 42, 139, 0.1)',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden',
        }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '26px 51px',
            borderBottom: '1px solid rgba(110, 110, 110, 0.3)',
            borderRadius: '40px',
          }}
        >
          <h3
            style={{
              fontFamily: 'Manrope',
              fontWeight: 500,
              fontSize: '16px',
              color: '#1A1A1A',
              margin: 0,
            }}
          >
            Notifications
          </h3>
          <button
            onClick={onClose}
            style={{
              background: 'transparent',
              border: 'none',
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
            overflowY: 'auto',
            padding: '0',
          }}
        >
          {/* Today Section */}
          {todayNotifications.length > 0 && (
            <div style={{ padding: '20px 29px' }}>
              <h4
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#6E6E6E',
                  margin: '0 0 12px 0',
                  lineHeight: '20px',
                }}
              >
                Today
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {todayNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    style={{
                      background: '#FBFAFC',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F4EFFA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FBFAFC';
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'Manrope',
                          fontWeight: 400,
                          fontSize: '14px',
                          color: notif.isHighlighted ? '#5D2A8B' : '#6E6E6E',
                          margin: 0,
                          lineHeight: '100%',
                        }}
                      >
                        {notif.title}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: notif.isHighlighted ? '#5D2A8B' : '#6E6E6EB2',
                        marginLeft: '8px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {notif.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Last Week Section */}
          {lastWeekNotifications.length > 0 && (
            <div style={{ padding: '20px 29px' }}>
              <h4
                style={{
                  fontFamily: 'Manrope',
                  fontWeight: 500,
                  fontSize: '14px',
                  color: '#6E6E6E',
                  margin: '0 0 12px 0',
                  lineHeight: '20px',
                }}
              >
                Last Week
              </h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {lastWeekNotifications.map((notif) => (
                  <div
                    key={notif.id}
                    style={{
                      background: '#FBFAFC',
                      borderRadius: '12px',
                      padding: '12px 16px',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = '#F4EFFA';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = '#FBFAFC';
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <p
                        style={{
                          fontFamily: 'Manrope',
                          fontWeight: 400,
                          fontSize: '14px',
                          color: notif.isHighlighted ? '#5D2A8B' : '#6E6E6EB2',
                          margin: 0,
                          lineHeight: '100%',
                        }}
                      >
                        {notif.title}
                      </p>
                    </div>
                    <span
                      style={{
                        fontFamily: 'Manrope',
                        fontWeight: 400,
                        fontSize: '12px',
                        color: notif.isHighlighted ? '#5D2A8B' : '#6E6E6EB2',
                        marginLeft: '8px',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {notif.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};