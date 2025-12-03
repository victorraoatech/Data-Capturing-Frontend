'use client';

import { useState, useEffect } from 'react';

interface UserProfile {
  id: string;
  userId?: string;
  email: string;
  fullName: string;
  firstName?: string;
  lastName?: string;
  phoneNumber: string | null;
  role: string;
  isAdmin: boolean;
  isVerified: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UseProfileReturn {
  profile: UserProfile | null;
  loading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export const useProfile = (): UseProfileReturn => {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchProfile = async () => {
    try {
      setLoading(true);
      setError(null);

      const token = localStorage.getItem('token');
      
      if (!token) {
        throw new Error('No authentication token found');
      }

      const response = await fetch('/api/user/profile', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        // Don't log to console in production, but we can keep it for development
        if (process.env.NODE_ENV === 'development') {
          console.error('Profile API error:', errorData);
        }
        throw new Error(errorData.message || `Failed to fetch profile: ${response.statusText}`);
      }

      const data = await response.json();
      
      // Handle different response structures
      let profileData = data.user || data.data?.user || data.data || data;
      
      // Ensure firstName and lastName are available
      if (profileData.fullName && profileData.fullName.trim() && !profileData.firstName && !profileData.lastName) {
        const [firstName, ...lastNameParts] = profileData.fullName.split(' ');
        const lastName = lastNameParts.join(' ');
        profileData = {
          ...profileData,
          firstName: firstName || '',
          lastName: lastName || ''
        };
      } else if (!profileData.firstName && !profileData.lastName) {
        // If fullName is empty, try to extract from email
        const emailName = profileData.email?.split('@')[0] || '';
        profileData = {
          ...profileData,
          firstName: emailName,
          lastName: ''
        };
      }
      
      // Ensure userId is available
      if (profileData.id && !profileData.userId) {
        profileData = {
          ...profileData,
          userId: profileData.id
        };
      }
      
      setProfile(profileData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      // Don't log to console in production, but we can keep it for development
      if (process.env.NODE_ENV === 'development') {
        console.error('Profile fetch error:', err);
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
    error,
    refetch: fetchProfile,
  };
};