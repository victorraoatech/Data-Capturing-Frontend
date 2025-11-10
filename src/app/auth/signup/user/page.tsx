'use client';

import React, { useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useMutation } from '@tanstack/react-query';
import { useAuth } from '@/api/hooks/useAuth';
import { toast } from '@/app/components/hooks/use-toast';
import Link from "next/link"

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

type ApiError = {
  response?: {
    status?: number;
    statusText?: string;
    data?: {
      errors?: Array<{ message: string }>;
      message?: string;
    };
  };
  message?: string;
  code?: string;
  name?: string;
};

export default function SignupPage() {
  const router = useRouter();
  const { client } = useAuth();

  const [formValues, setFormValues] = useState<FormValues>({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate: submitMutate, isPending } = useMutation({
    mutationFn: async (values: { 
      fullName: string; 
      email: string; 
      phone: string;
      password: string;
    }) => {
      // Split full name into first and last name
      const nameParts = values.fullName.trim().split(' ');
      const firstName = nameParts[0] || '';
      const lastName = nameParts.slice(1).join(' ') || '';

      const payload = {
        firstName: firstName,
        lastName: lastName,
        email: values.email.toLowerCase().trim(),
        phone: values.phone.trim(),
        password: values.password,
        role: 'user',
      };
      
      console.log('🚀 Sending USER registration to backend:', payload);

      const { data } = await client.post('/api/auth/register', payload);
      return data;
    },
    onSuccess: () => {
      toast({ 
        title: 'REGISTRATION SUCCESSFUL!',
        description: 'Your account has been created successfully' 
      });
      router.replace('/auth/login');
    },
    onError: (error: ApiError) => {
      const message =
        error?.response?.data?.errors?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        'Registration failed';
      toast({ 
        title: 'Registration Failed',
        description: message,
        variant: 'destructive'
      });
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormValues]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validate = (): boolean => {
    const newErrors: Partial<FormValues> = {};
    
    if (!formValues.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formValues.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) newErrors.email = 'Invalid email address';
    if (!formValues.phone.trim()) newErrors.phone = 'Phone number is required';
    else if (!/^\+?[\d\s-()]{10,}$/.test(formValues.phone.replace(/\s/g, ''))) newErrors.phone = 'Invalid phone number';
    if (!formValues.password) newErrors.password = 'Password is required';
    else if (formValues.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formValues.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formValues.password !== formValues.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    submitMutate({ 
      fullName: formValues.fullName, 
      email: formValues.email, 
      phone: formValues.phone,
      password: formValues.password
    });
  };

  const handleGoogleSignUp = () => {
    toast({
      title: 'Google Sign Up',
      description: 'This feature will be implemented soon'
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .monument-extended { font-family: 'Monument Extended', sans-serif; }
        .manrope { font-family: 'Manrope', sans-serif; }
        
        .input-container {
          position: relative;
          width: 484px;
          height: 60px;
          border: 1px solid #6E6E6E4D;
          border-radius: 10px;
          background: white;
          // transition: border-color 0.2s ease;
        }
        
        .input-container input {
          width: 100%;
          height: 100%;
          border: none;
          outline: none;
          background: white !important;
          padding: 17px 30px;
          font-family: 'Manrope', sans-serif;
          font-size: 20px;
          color: #6E6E6E;
        }
        
        .input-container input:-webkit-autofill,
        .input-container input:-webkit-autofill:hover,
        .input-container input:-webkit-autofill:focus,
        .input-container input:-webkit-autofill:active {
          -webkit-box-shadow: 0 0 0 30px white inset !important;
          -webkit-text-fill-color: #6E6E6E !important;
          background-color: white !important;
          background: white !important;
        }
        
        .input-container input::placeholder {
          color: #6E6E6E;
          opacity: 1;
        }
        
        .input-container.has-value {
          border: 1px solid #5D2A8B99;
        }
        
        .input-container.has-value input {
          padding-top: 25px;
          padding-bottom: 9px;
          background: white;
        }
        
        .input-label {
          position: absolute;
          top: -10px;
          left: 30px;
          font-family: 'Manrope', sans-serif;
          font-weight: 400;
          font-size: 14px;
          color: #5D2A8B;
          background: white;
          padding: 0 5px;
          pointer-events: none;
          transition: all 0.2s ease;
        }
        
        .input-container:focus-within {
          border: 1px solid #5D2A8B99;
        }
        
        .input-container:focus-within .input-label {
          color: #5D2A8B;
        }
        
        .input-container.error {
          border-color: #ef4444;
        }
        
        .password-toggle {
          position: absolute;
          right: 15px;
          top: 50%;
          transform: translateY(-50%);
          cursor: pointer;
          color: #6E6E6E;
        }
      `}</style>

      <div className="relative" style={{ width: "1440px", minHeight: "1100px", margin: "0 auto" }}>
        {/* Left Image Section */}
        <div 
          className="absolute"
          style={{
            width: "700px",
            height: "1025px",
            top: "44px",
            left: "45px",
            borderRadius: "40px",
            background: "linear-gradient(180deg, #F4EFFA 0%, #5D2A8B 10%)",
            overflow: "hidden"
          }}
        >
          <Image 
            src="/Frame 335677.png" 
            alt="Data Capturing Illustration" 
            width={700} 
            height={1025} 
            priority 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Right Form Section */}
        <div 
          className="absolute"
          style={{
            width: "609px",
            height: "1025px",
            top: "44px",
            left: "785px",
            borderRadius: "40px",
            background: "#FBFAFC"
          }}
        >
          {/* Logo */}
          <div 
            className="absolute"
            style={{
              top: "50px",
              left: "50px"
            }}
          >
            <Image 
              width={55} 
              height={48} 
              src="/Group 1.png" 
              alt="Company Logo" 
              className="object-contain" 
            />
          </div>

          {/* Header */}
          <div 
            className="absolute"
            style={{
              width: "349px",
              height: "77px",
              top: "136px",
              left: "50px",
              gap: "16px"
            }}
          >
            <h1 
              className="monument-extended"
              style={{
                fontSize: "30px",
                fontWeight: 400,
                lineHeight: "100%",
                color: "#1A1A1A",
                margin: 0,
                marginBottom: "16px"
              }}
            >
              Sign Up
            </h1>
            <p 
              className="manrope"
              style={{
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "100%",
                color: "#6E6E6EB2",
                width: "349px",
                height: "25px",
                margin: 0
              }}
            >
              Create an account with us and get started!
            </p>
          </div>

          {/* Google Sign Up Button */}
          <div 
            className="absolute"
            style={{
              top: "273px",
              left: "50px"
            }}
          >
            <button 
              type="button" 
              onClick={handleGoogleSignUp}
              style={{
                width: "484px",
                height: "60px",
                border: "1px solid #6E6E6E4D",
                borderRadius: "10px",
                background: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "12px",
                cursor: "pointer"
              }}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8 10.2273C19.8 9.52045 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.5891C15.3545 13.3 14.6182 14.3591 13.5182 15.0682V17.5773H16.8091C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                <path d="M10.2 20C12.9 20 15.1636 19.1045 16.8091 17.5773L13.5182 15.0682C12.5909 15.6682 11.4182 16.0227 10.2 16.0227C7.59545 16.0227 5.39091 14.2636 4.57273 11.9H1.16364V14.4909C2.79545 17.7591 6.26364 20 10.2 20Z" fill="#34A853"/>
                <path d="M4.57273 11.9C4.37273 11.3 4.25909 10.6591 4.25909 10C4.25909 9.34091 4.37273 8.7 4.57273 8.1V5.50909H1.16364C0.477273 6.85909 0.0909091 8.38636 0.0909091 10C0.0909091 11.6136 0.477273 13.1409 1.16364 14.4909L4.57273 11.9Z" fill="#FBBC04"/>
                <path d="M10.2 3.97727C11.5318 3.97727 12.7136 4.43182 13.6409 5.30909L16.5682 2.38182C15.1591 1.08182 12.8955 0.227273 10.2 0.227273C6.26364 0.227273 2.79545 2.46818 1.16364 5.50909L4.57273 8.1C5.39091 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
              </svg>
              <span className="manrope" style={{ fontSize: "15px", fontWeight: 500, color: "#374151" }}>
                Sign up with Google
              </span>
            </button>
          </div>

          {/* Divider */}
          <div 
            className="absolute flex items-center"
            style={{
              width: "484px",
              height: "25px",
              top: "393px",
              left: "50px"
            }}
          >
            <div style={{ flex: 1, height: "1px", background: "#d1d5db" }} />
            <span className="manrope" style={{ padding: "0 16px", fontSize: "14px", color: "#9ca3af" }}>or</span>
            <div style={{ flex: 1, height: "1px", background: "#d1d5db" }} />
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {/* Full Name Input */}
            <div 
              className="absolute"
              style={{
                top: "463px",
                left: "50px"
              }}
            >
              <div className={`input-container ${formValues.fullName ? 'has-value' : ''} ${errors.fullName ? 'error' : ''}`}>
                <input
                  type="text"
                  name="fullName"
                  value={formValues.fullName}
                  onChange={handleChange}
                  placeholder="Demola Alo"
                />
                {formValues.fullName && (
                  <label className="input-label">Full Name</label>
                )}
              </div>
              {errors.fullName && (
                <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px", fontFamily: "Manrope" }}>
                  {errors.fullName}
                </p>
              )}
            </div>

            {/* Email Input */}
            <div 
              className="absolute"
              style={{
                top: "568px",
                left: "50px"
              }}
            >
              <div className={`input-container ${formValues.email ? 'has-value' : ''} ${errors.email ? 'error' : ''}`}>
                <input
                  type="email"
                  name="email"
                  value={formValues.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                />
                {formValues.email && (
                  <label className="input-label">Email</label>
                )}
              </div>
              {errors.email && (
                <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px", fontFamily: "Manrope" }}>
                  {errors.email}
                </p>
              )}
            </div>

            {/* Phone Number Input */}
            <div 
              className="absolute"
              style={{
                top: "658px",
                left: "50px"
              }}
            >
              <div className={`input-container ${formValues.phone ? 'has-value' : ''} ${errors.phone ? 'error' : ''}`}>
                <input
                  type="tel"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleChange}
                  placeholder="09012345678"
                />
                {formValues.phone && (
                  <label className="input-label">Phone Number</label>
                )}
              </div>
              {errors.phone && (
                <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px", fontFamily: "Manrope" }}>
                  {errors.phone}
                </p>
              )}
            </div>

            {/* Password Input */}
            <div 
              className="absolute"
              style={{
                top: "748px",
                left: "50px"
              }}
            >
              <div className={`input-container ${formValues.password ? 'has-value' : ''} ${errors.password ? 'error' : ''}`}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formValues.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{ paddingRight: "50px" }}
                />
                {formValues.password && (
                  <label className="input-label">Password</label>
                )}
                <button 
                  type="button" 
                  onClick={() => setShowPassword(!showPassword)}
                  className="password-toggle"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.password && (
                <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px", fontFamily: "Manrope" }}>
                  {errors.password}
                </p>
              )}
            </div>

            {/* Confirm Password Input */}
            <div 
              className="absolute"
              style={{
                top: "838px",
                left: "50px"
              }}
            >
              <div className={`input-container ${formValues.confirmPassword ? 'has-value' : ''} ${errors.confirmPassword ? 'error' : ''}`}>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formValues.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  style={{ paddingRight: "50px" }}
                />
                {formValues.confirmPassword && (
                  <label className="input-label">Confirm Password</label>
                )}
                <button 
                  type="button" 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="password-toggle"
                >
                  {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              {errors.confirmPassword && (
                <p style={{ color: "#ef4444", fontSize: "14px", marginTop: "4px", fontFamily: "Manrope" }}>
                  {errors.confirmPassword}
                </p>
              )}
            </div>

            {/* Sign Up Button */}
            <div 
              className="absolute"
              style={{
                top: "928px",
                left: "50px"
              }}
            >
              <button 
                type="submit" 
                disabled={isPending}
                style={{
                  width: "484px",
                  height: "60px",
                  background: "#5D2A8B",
                  borderRadius: "10px",
                  border: "none",
                  color: "white",
                  fontFamily: "Manrope",
                  fontWeight: 600,
                  fontSize: "16px",
                  cursor: isPending ? "not-allowed" : "pointer",
                  opacity: isPending ? 0.7 : 1
                }}
              >
                {isPending ? 'Signing up...' : 'Sign Up'}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div 
            className="absolute"
            style={{
              top: "1000px",
              left: "163px",
              width: "258px",
              height: "25px"
            }}
          >
            <p 
              className="manrope"
              style={{
                fontWeight: 300,
                fontSize: "18px",
                lineHeight: "100%",
                color: "#6E6E6E",
                textAlign: "center",
                margin: 0
              }}
            >
              Already have an account?{" "}
              <Link
                href="/auth/login"
                style={{
                  fontWeight: 500,
                  color: "#5D2A8B",
                  textDecoration: "none"
                }}
              >
                Login
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}