import { useState, useEffect } from 'react';

interface UserProfile {
  userId?: string;
  id?: string;
  email: string;
  firstName?: string;
  lastName?: string;
  role?: string;
  avatar?: string;
  createdAt?: string;
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

      const response = await fetch('https://datacapture-backend.onrender.com/api/auth/me', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({}));
        console.error('Profile API error:', errorData);
        throw new Error(errorData.message || `Failed to fetch profile: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Profile data received:', data);
      
      // Handle different response structures
      const profileData = data.user || data.data || data;
      setProfile(profileData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Profile fetch error:', err);
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
