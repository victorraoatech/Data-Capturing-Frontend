'use client';

import React, { useState } from 'react';
import { useProfile } from '@/api/hooks/useProfile';
import Image from 'next/image';
import { MessageModal } from '@/app/components/MessageModal';

const ProfilePage = () => {
  const { profile, loading, error } = useProfile();
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'info' as 'info' | 'success' | 'warning' | 'error'
  });

  const handleEditProfile = () => {
    setModalState({
      isOpen: true,
      title: 'Feature Coming Soon',
      message: 'Edit profile feature is currently under development. Please check back later.',
      type: 'info'
    });
  };

  const closeModal = () => {
    setModalState({ ...modalState, isOpen: false });
  };

  return (
    <div className="min-h-screen bg-white p-0">
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

      {/* Profile Content */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          top: '120px',
          left: '401px'
        }}
      >
        <h2 className="manrope text-2xl font-semibold text-gray-800 mb-8">My Profile</h2>

        {/* Profile Card */}
        <div 
          className="bg-white shadow-sm"
          style={{
            borderRadius: '20px',
            padding: '40px',
            border: '1px solid #E4D8F3'
          }}
        >
          {loading ? (
            <div className="text-center py-8">
              <p className="manrope text-gray-500">Loading profile...</p>
            </div>
          ) : error ? (
            <div className="text-center py-8">
              <p className="manrope text-red-500">Failed to load profile</p>
              <p className="manrope text-sm text-gray-500 mt-2">{error}</p>
            </div>
          ) : profile ? (
            <div className="flex flex-col gap-8">
              {/* Avatar Section */}
              <div className="flex items-center gap-6">
                <div 
                  className="relative overflow-hidden flex items-center justify-center"
                  style={{
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: '#6D1E1E'
                  }}
                >
                  <Image 
                    src="/Frame 1707479300.png" 
                    alt="User Avatar" 
                    width={100} 
                    height={100}
                    className="object-cover"
                  />
                </div>
                <div>
                  <h3 className="manrope text-xl font-semibold text-gray-800">
                    {profile.firstName && profile.lastName 
                      ? `${profile.firstName} ${profile.lastName}`
                      : 'User'}
                  </h3>
                  <p className="manrope text-sm text-gray-500 mt-1">{profile.email}</p>
                </div>
              </div>

              {/* Profile Information */}
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="manrope text-sm font-medium text-gray-600">Email</label>
                  <p className="manrope text-base text-gray-800 mt-2">{profile.email}</p>
                </div>
                
                <div>
                  <label className="manrope text-sm font-medium text-gray-600">User ID</label>
                  <p className="manrope text-base text-gray-800 mt-2 break-all">{profile.userId || profile.id || 'N/A'}</p>
                </div>

                {profile.role && (
                  <div>
                    <label className="manrope text-sm font-medium text-gray-600">Role</label>
                    <p className="manrope text-base text-gray-800 mt-2 capitalize">{profile.role}</p>
                  </div>
                )}

                {profile.createdAt && (
                  <div>
                    <label className="manrope text-sm font-medium text-gray-600">Member Since</label>
                    <p className="manrope text-base text-gray-800 mt-2">
                      {new Date(profile.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                )}
              </div>

              {/* Edit Button */}
              <div className="flex justify-end mt-4">
                <button 
                  className="manrope"
                  style={{
                    background: '#5D2A8B',
                    color: 'white',
                    padding: '12px 32px',
                    borderRadius: '10px',
                    border: 'none',
                    fontSize: '16px',
                    fontWeight: 500,
                    cursor: 'pointer'
                  }}
                  onClick={handleEditProfile}
                >
                  Edit Profile
                </button>
              </div>
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="manrope text-gray-500">No profile data available</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;