'use client';

import React, { useState } from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import Image from 'next/image';

export const UserTopBar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Positioned inside the white navigation bar at top right - Absolute position */}
      <div 
        className="absolute flex items-center gap-3 z-30"
        style={{
          top: '124px',
          left: '850px'
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

        {/* Avatar and Dropdown */}
        <div className="relative">
          <div 
            className="flex items-center cursor-pointer"
            style={{
              width: '68px',
              height: '40px',
              gap: '6px'
            }}
            onClick={() => setShowDropdown(!showDropdown)}
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

          {/* Dropdown Menu */}
          {showDropdown && (
            <div 
              className="absolute bg-white shadow-lg rounded-lg overflow-hidden"
              style={{
                top: '50px',
                right: '0',
                width: '200px',
                border: '1px solid #E4D8F3'
              }}
            >
              <div className="manrope py-2">
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700">
                  Profile
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-gray-700">
                  Settings
                </button>
                <button className="w-full px-4 py-2 text-left hover:bg-gray-50 text-sm text-red-600">
                  Logout
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};
