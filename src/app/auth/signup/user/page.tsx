





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
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

type ApiError = {
  response?: {
    data?: {
      errors?: Array<{ message: string }>;
      message?: string;
    };
  };
  message?: string;
};

export default function SignupPage() {
  const router = useRouter();
  const { client } = useAuth();

  const [formValues, setFormValues] = useState<FormValues>({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [errors, setErrors] = useState<Partial<FormValues>>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { mutate: submitMutate, isPending } = useMutation({
    mutationFn: async (values: { name: string; email: string; password: string }) => {
      const payload = {
        name: values.name.trim(),
        email: values.email,
        password: values.password,
        
      };
      const { data } = await client.post('/api/auth/register', payload);
      return data;
    },
    onSuccess: () => {
      toast({ title: 'REGISTRATION SUCCESSFUL!' });
      router.replace('/auth/login');
    },
    onError: (error: ApiError) => {
      const message =
        error?.response?.data?.errors?.[0]?.message ||
        error?.response?.data?.message ||
        error?.message ||
        'Registration failed';
      toast({ title: message });
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
    if (!formValues.name.trim()) newErrors.name = 'Name is required';
    if (!formValues.email.trim()) newErrors.email = 'Email is required';
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) newErrors.email = 'Invalid email address';
    if (!formValues.password) newErrors.password = 'Password is required';
    else if (formValues.password.length < 8) newErrors.password = 'Password must be at least 8 characters';
    if (!formValues.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
    else if (formValues.password !== formValues.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = () => {
    if (!validate()) return;

    submitMutate({ name: formValues.name, email: formValues.email, password: formValues.password });
  };

  const handleGoogleSignUp = () => alert('Google sign up would be implemented here');

  return (
    <div className="min-h-screen flex items-center justify-center bg-white p-6 lg:p-11">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .monument-extended { font-family: 'Monument Extended', sans-serif; }
        .manrope { font-family: 'Manrope', sans-serif; }
        .input-with-notch { position: relative; }
        .input-with-notch input { border: 1px solid #d1d5db; border-radius: 12px; }
        .input-with-notch input:focus { border-color: #5D2A8B; }
        .input-with-notch.has-value input { clip-path: polygon(0 8px,12px 8px,12px 0,calc(12px + 70px) 0,calc(12px + 70px) 8px,100% 8px,100% 100%,0 100%); }
        .input-with-notch.has-value::before { content: ''; position:absolute; left:0; top:0; right:0; bottom:0; border:1px solid #d1d5db; border-radius:12px; pointer-events:none; clip-path: polygon(0 0,12px 0,12px 8px,calc(12px + 70px) 8px,calc(12px + 70px) 0,100% 0,100% 100%,0 100%); }
        .input-with-notch.focused::before { border-color:#5D2A8B; }
        .input-with-notch.error input { border-color: #ef4444; }
        .input-with-notch.error::before { border-color: #ef4444; }
      `}</style>


      <div className="w-full max-w-[1439px] flex gap-10 relative">
       
        <div className="hidden lg:block lg:w-[700px] lg:h-[1025px] rounded-[40px] overflow-hidden lg:mt-[44px] lg:ml-[45px]">
          <Image src="/Frame 335677.png" alt="Data Capturing Illustration" width={700} height={1025} priority className="w-full h-full object-cover" />
        </div>

        
        <div className="w-full lg:w-[609px] lg:h-[1025px] bg-[#FBFAFC] rounded-[40px] flex flex-col relative lg:mt-[44px]">
         
          <div className="pt-6 pl-6 lg:pt-[50px] lg:pl-[50px]">
            <Image width={55} height={48} src="/Group 1.png" alt="Company Logo" className="object-contain" />
          </div>

         
          <div className="mt-6 px-6 lg:px-0 lg:absolute lg:top-[180px] lg:left-12 lg:right-12">
            <h1 className="monument-extended text-[30px] lg:text-[30px] font-normal text-gray-900 mb-3 leading-[100%]">Sign Up</h1>
            <p className="manrope text-[15px] lg:text-[18px] font-light leading-[100%] text-gray-500">Create an account with us and get started!</p>
          </div>

         
          <div className="mt-4 px-6 lg:px-0 lg:absolute lg:top-[310px] lg:left-12 lg:right-12">
            <button type="button" onClick={handleGoogleSignUp} className="w-full flex items-center justify-center gap-3 px-4 py-4 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 transition-colors shadow-sm">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19.8 10.2273C19.8 9.52045 19.7364 8.83636 19.6182 8.18182H10.2V12.05H15.5891C15.3545 13.3 14.6182 14.3591 13.5182 15.0682V17.5773H16.8091C18.7091 15.8364 19.8 13.2727 19.8 10.2273Z" fill="#4285F4"/>
                <path d="M10.2 20C12.9 20 15.1636 19.1045 16.8091 17.5773L13.5182 15.0682C12.5909 15.6682 11.4182 16.0227 10.2 16.0227C7.59545 16.0227 5.39091 14.2636 4.57273 11.9H1.16364V14.4909C2.79545 17.7591 6.26364 20 10.2 20Z" fill="#34A853"/>
                <path d="M4.57273 11.9C4.37273 11.3 4.25909 10.6591 4.25909 10C4.25909 9.34091 4.37273 8.7 4.57273 8.1V5.50909H1.16364C0.477273 6.85909 0.0909091 8.38636 0.0909091 10C0.0909091 11.6136 0.477273 13.1409 1.16364 14.4909L4.57273 11.9Z" fill="#FBBC04"/>
                <path d="M10.2 3.97727C11.5318 3.97727 12.7136 4.43182 13.6409 5.30909L16.5682 2.38182C15.1591 1.08182 12.8955 0.227273 10.2 0.227273C6.26364 0.227273 2.79545 2.46818 1.16364 5.50909L4.57273 8.1C5.39091 5.73636 7.59545 3.97727 10.2 3.97727Z" fill="#EA4335"/>
              </svg>
              <span className="manrope text-gray-700 font-medium text-[15px]">Sign up with Google</span>
            </button>
          </div>

         
          <div className="flex items-center gap-4 mt-4 px-6 lg:px-0 lg:absolute lg:top-[390px] lg:left-12 lg:right-12">
            <div className="flex-1 h-px bg-gray-300" />
            <span className="manrope text-sm text-gray-400">or</span>
            <div className="flex-1 h-px bg-gray-300" />
          </div>

       
          <div className="mt-4 px-6 pb-8 lg:px-0 lg:absolute lg:top-[438px] lg:left-[62px] lg:right-[63px] space-y-6">
            
            <div className={`input-with-notch ${formValues.name ? 'has-value' : ''} ${errors.name ? 'error' : ''}`}>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Demola Alo"
                className="manrope w-full lg:w-[484px] h-[75px] px-6 pt-6 pb-2 focus:outline-none bg-white text-gray-900 text-[20px] placeholder-gray-400"
              />
              {formValues.name && <label className="manrope absolute left-[18px] top-[2px] text-[11px] text-gray-500 font-medium bg-white px-1">Full Name</label>}
              {errors.name && <p className="manrope mt-2 text-sm text-red-500 ml-2">{errors.name}</p>}
            </div>

          
            <div className={`input-with-notch ${formValues.email ? 'has-value' : ''} ${errors.email ? 'error' : ''}`}>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="you@example.com"
                className="manrope w-full lg:w-[484px] h-[75px] px-6 pt-6 pb-2 focus:outline-none bg-white text-gray-900 text-[20px] placeholder-gray-400"
              />
              {formValues.email && <label className="manrope absolute left-[18px] top-[2px] text-[11px] text-gray-500 font-medium bg-white px-1">Email</label>}
              {errors.email && <p className="manrope mt-2 text-sm text-red-500 ml-2">{errors.email}</p>}
            </div>

            {/* Password */}
            <div className={`input-with-notch ${formValues.password ? 'has-value' : ''} ${errors.password ? 'error' : ''}`}>
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                value={formValues.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="manrope w-full lg:w-[484px] h-[75px] px-6 pt-6 pb-2 pr-14 focus:outline-none bg-white text-gray-900 text-[20px] placeholder-gray-400"
              />
              {formValues.password && <label className="manrope absolute left-[18px] top-[2px] text-[11px] text-gray-500 font-medium bg-white px-1">Password</label>}
              <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.password && <p className="manrope mt-2 text-sm text-red-500 ml-2">{errors.password}</p>}
            </div>

            {/* Confirm Password */}
            <div className={`input-with-notch ${formValues.confirmPassword ? 'has-value' : ''} ${errors.confirmPassword ? 'error' : ''}`}>
              <input
                type={showConfirmPassword ? 'text' : 'password'}
                name="confirmPassword"
                value={formValues.confirmPassword}
                onChange={handleChange}
                placeholder="••••••••"
                className="manrope w-full lg:w-[484px] h-[75px] px-6 pt-6 pb-2 pr-14 focus:outline-none bg-white text-gray-900 text-[20px] placeholder-gray-400"
              />
              {formValues.confirmPassword && <label className="manrope absolute left-[18px] top-[2px] text-[11px] text-gray-500 font-medium bg-white px-1">Confirm Password</label>}
              <button type="button" onClick={() => setShowConfirmPassword(!showConfirmPassword)} className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600">
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
              {errors.confirmPassword && <p className="manrope mt-2 text-sm text-red-500 ml-2">{errors.confirmPassword}</p>}
            </div>

            {/* Submit */}
            <button onClick={handleSubmit} type="button" disabled={isPending} className="manrope w-full lg:w-[484px] h-[60px] bg-[#5D2A8B] hover:bg-[#4a2170] text-white font-semibold rounded-xl transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-md text-[16px] mt-4">
              {isPending ? 'Signing up...' : 'Sign Up'}
            </button>
          </div>

          {/* Footer */}
         <div className="mt-6 px-6 lg:px-0 lg:absolute lg:bottom-16 lg:left-12 lg:right-12 text-center">
  <p className="manrope text-gray-600 text-[15px]">
    Already have an account?{" "}
    <Link
      href="/auth/login"
      className="text-[#5D2A8B] font-semibold hover:underline"
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
