'use client';

import React, { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import { useProfile } from '@/api/hooks/useProfile';
import { useRouter } from 'next/navigation';

export const UserTopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const { profile, loading, error } = useProfile();
  const router = useRouter();
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // Log errors for debugging
  React.useEffect(() => {
    if (error) {
      console.error('Profile loading error:', error);
    }
    if (profile) {
      console.log('Profile loaded successfully:', profile);
    }
  }, [error, profile]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    router.push('/auth/login');
  };

  const getInitials = () => {
    if (profile?.firstName && profile?.lastName) {
      return `${profile.firstName[0]}${profile.lastName[0]}`.toUpperCase();
    }
    if (profile?.email) {
      return profile.email[0].toUpperCase();
    }
    return 'U';
  };

  // Close dropdown when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Positioned inside the white navigation bar at top right - Absolute position */}
      <div 
        className="absolute flex items-center gap-3"
        style={{
          top: '124px',
          left: '850px',
          zIndex: 100,
          pointerEvents: 'auto'
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
          onClick={() => console.log('Notification clicked')}
        >
          <Bell className="w-5 h-5 text-gray-600" />
        </button>

        {/* Avatar and Dropdown */}
        <div className="relative" ref={dropdownRef} style={{ zIndex: 101 }}>
          <button 
            className="flex items-center cursor-pointer bg-transparent border-none p-0"
            style={{
              width: '68px',
              height: '40px',
              gap: '6px',
              pointerEvents: 'auto'
            }}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              console.log('Avatar clicked, current state:', showDropdown);
              setShowDropdown(!showDropdown);
              console.log('New state should be:', !showDropdown);
            }}
            type="button"
          >
            {/* Avatar Image */}
            <div 
              className="relative overflow-hidden flex items-center justify-center"
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '40px',
                background: '#6D1E1E',
                pointerEvents: 'none'
              }}
            >
              <Image 
                src="/Frame 1707479300.png" 
                alt="User Avatar" 
                width={40} 
                height={40}
                className="object-cover"
                style={{ pointerEvents: 'none' }}
              />
            </div>

            {/* Dropdown Icon */}
            <ChevronDown 
              className="text-gray-600"
              style={{
                width: '22px',
                height: '22px',
                pointerEvents: 'none'
              }}
            />
          </button>

          {/* Dropdown Menu */}
          {showDropdown && (
            <div 
              className="absolute manrope"
              style={{
                top: '48px',
                right: '0',
                width: '200px',
                background: '#F4EFFA',
                borderRadius: '15px',
                zIndex: 99999,
                boxShadow: '0 10px 25px rgba(0, 0, 0, 0.15)',
                padding: '20px'
              }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Menu Items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <button 
                  className="w-full text-left transition-colors"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '18px',
                    color: '#1A1A1A',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onClick={() => {
                    setShowDropdown(false);
                    router.push('/user/profile');
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5D2A8B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1A1A1A';
                  }}
                >
                  Profile
                </button>
                <button 
                  className="w-full text-left transition-colors"
                  style={{
                    background: 'transparent',
                    border: 'none',
                    fontFamily: 'Manrope',
                    fontWeight: 500,
                    fontSize: '18px',
                    color: '#1A1A1A',
                    cursor: 'pointer',
                    padding: 0
                  }}
                  onClick={handleLogout}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = '#5D2A8B';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = '#1A1A1A';
                  }}
                >
                  Sign Out
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
