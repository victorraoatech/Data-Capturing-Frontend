"use client"
import { useState, useRef } from 'react';
import { Upload, RefreshCw, Trash2, Image } from 'lucide-react';
import Navbar from '@/app/components/navbar';

const Page = () => {
  const [frontImage, setFrontImage] = useState<string | null>(null);
  const [sideImage, setSideImage] = useState<string | null>(null);
  const [measurements, setMeasurements] = useState({
    chest: '0.00',
    waist: '0.00',
    hips: '0.00',
    legs: '0.00'
  });
  const [showAllMeasurements, setShowAllMeasurements] = useState(false);
  
  const allMeasurements = {
    chest: '10.00',
    waist: '20.00',
    hips: '38.00',
    legs: '40.00',
    shoulders: '45.00',
    neck: '15.00',
    sleeve: '60.00',
    inseam: '80.00'
  };

  const displayedMeasurements = showAllMeasurements 
    ? allMeasurements 
    : {
        chest: measurements.chest,
        waist: measurements.waist,
        hips: measurements.hips,
        legs: measurements.legs
      };
  const [analyzingFront, setAnalyzingFront] = useState(false);
  const [analyzingSide, setAnalyzingSide] = useState(false);
  
  const frontInputRef = useRef<HTMLInputElement>(null);
  const sideInputRef = useRef<HTMLInputElement>(null);
 

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>, type: 'front' | 'side') => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (typeof result === 'string') {
          if (type === 'front') {
            setFrontImage(result);
            analyzeFrontImage();
          } else {
            setSideImage(result);
            analyzeSideImage();
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const analyzeFrontImage = () => {
    setAnalyzingFront(true);
    setTimeout(() => {
      setMeasurements({
        chest: '10.00',
        waist: '20.00',
        hips: '38.00',
        legs: '40.00'
      });
      setAnalyzingFront(false);
    }, 2000);
  };

  const analyzeSideImage = () => {
    setAnalyzingSide(true);
    setTimeout(() => {
      setAnalyzingSide(false);
    }, 2000);
  };

  const clearImage = (type: 'front' | 'side') => {
    if (type === 'front') {
      setFrontImage(null);
      if (frontInputRef.current) frontInputRef.current.value = '';
    } else {
      setSideImage(null);
      if (sideInputRef.current) sideInputRef.current.value = '';
    }
  };

  const handleDownload = () => {
    const data = `Body Measurements

Chest: ${measurements.chest} cm
Waist: ${measurements.waist} cm
Hips: ${measurements.hips} cm
Legs: ${measurements.legs} cm`;
    const blob = new Blob([data], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'measurements.txt';
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    
    <div>
        <Navbar/>
         <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-monument font-bold text-gray-900 mb-2">Upload Images</h1>
          <p className="text-gray-500 font-manrope">Upload, analyze and get measurements instantly</p>
        </div>

        <div className="bg-white rounded-lg shadow-sm p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Tools</span>
                <div className="flex gap-2">
                  <button 
                    className="p-2 hover:bg-gray-100 rounded" 
                    title="Upload"
                    aria-label="Upload image"
                  >
                    <Upload className="w-4 h-4 text-gray-600" />
                  </button>
                  <button 
                    className="p-2 hover:bg-gray-100 rounded" 
                    title="Refresh"
                    aria-label="Refresh"
                  >
                    <RefreshCw className="w-4 h-4 text-gray-600" />
                  </button>
                  <button 
                    className="p-2 hover:bg-gray-100 rounded" 
                    title="Delete"
                    aria-label="Delete image"
                    onClick={() => clearImage('front')}
                  >
                    <Trash2 className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                {frontImage ? (
                  <>
                    <div className="w-full h-full relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={frontImage} 
                        alt="Front view of body for measurement analysis" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {analyzingFront && (
                      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                        <div className="text-center">
                          <RefreshCw className="w-8 h-8 text-purple-600 animate-spin mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Analyzing front image...</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <label 
                      className="cursor-pointer text-center"
                      aria-label="Upload front view image"
                    >
                      <div className="w-12 h-12 text-gray-400 mx-auto mb-2 flex items-center justify-center">
                        <Image className="w-full h-full" aria-hidden="true" />
                      </div>
                      <span className="text-sm text-gray-500">Click to upload front image</span>
                      <input
                        ref={frontInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, 'front')}
                        aria-label="Front image upload"
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <p className="text-xs" style={{ color: '#5D2A8B99' }}>
                  {frontImage ? '**Front image measured**' : '**Front image**'}
                </p>
                {frontImage && (
                  <span className="text-lg" style={{ color: '#5D2A8B99' }}>✓</span>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="mb-4 flex items-center justify-between">
                <span className="text-sm font-medium text-gray-700">Tools</span>
                <div className="flex gap-2">
                  <button 
                    className="p-2 hover:bg-gray-100 rounded" 
                    title="Upload"
                    aria-label="Upload image"
                  >
                    <Upload className="w-4 h-4 text-gray-600" />
                  </button>
                </div>
              </div>

              <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ height: '400px' }}>
                {sideImage ? (
                  <>
                    <div className="w-full h-full relative">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img 
                        src={sideImage} 
                        alt="Side view of body for measurement analysis" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    {analyzingSide && (
                      <div className="absolute inset-0 bg-white bg-opacity-90 flex items-center justify-center">
                        <div className="text-center">
                          <RefreshCw className="w-8 h-8 text-purple-600 animate-spin mx-auto mb-2" />
                          <p className="text-sm text-gray-600">Analyzing side image...</p>
                        </div>
                      </div>
                    )}
                  </>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <label 
                      className="cursor-pointer text-center p-4"
                      aria-label="Upload side view image"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                        <Upload className="w-10 h-10 text-purple-500" aria-hidden="true" />
                      </div>
                      <p className="text-sm text-purple-600 font-medium mb-1">Upload side view or paste your file here</p>
                      <input
                        ref={sideInputRef}
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleImageUpload(e, 'side')}
                        aria-label="Side image upload"
                      />
                    </label>
                  </div>
                )}
              </div>
              <div className="mt-2 flex items-center justify-center gap-2">
                <p className="text-xs" style={{ color: '#5D2A8B99' }}>
                  {sideImage ? '**Side image measured**' : '**Side image**'}
                </p>
                {sideImage && (
                  <span className="text-lg" style={{ color: '#5D2A8B99' }}>✓</span>
                )}
              </div>
            </div>

            <div className="lg:col-span-1">
              <div className="bg-gray-50 rounded-lg p-6 h-full flex flex-col shadow-md">
                <div className="mb-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-sm font-medium" style={{ color: '#5D2A8B' }}>Measurement:</h3>
                    <button 
                      onClick={() => setShowAllMeasurements(!showAllMeasurements)}
                      className="hover:opacity-80 transition-opacity"
                      style={{ 
                        fontFamily: 'Manrope, sans-serif',
                        fontWeight: 300,
                        fontSize: '10px',
                        lineHeight: '100%',
                        textDecoration: 'underline',
                        textDecorationStyle: 'solid',
                        color: '#5D2A8B'
                      }}
                      aria-label={showAllMeasurements ? 'Show less measurements' : 'Show more measurements'}
                    >
                      {showAllMeasurements ? 'See less' : 'See more'}
                    </button>
                  </div>

                  <div className="space-y-4">
                    {Object.entries(displayedMeasurements).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between pb-3" style={{ borderBottom: '1px solid #E5E7EB' }}>
                        <span style={{ color: '#6E6E6E', textTransform: 'capitalize' }}>{key}:</span>
                        <span className="font-medium" style={{ color: '#6E6E6E' }}>{value} cm</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={handleDownload}
                  className="mt-auto w-full hover:opacity-90 text-white font-medium py-3 px-6 rounded-lg transition-opacity"
                  style={{ backgroundColor: '#5D2A8B' }}
                  aria-label="Download measurements as text file"
                >
                  Download
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
   
  );
};

export default Page;