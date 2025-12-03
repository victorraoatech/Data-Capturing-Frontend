'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';
import { useManualMeasurements, Measurement, MeasurementSection, MeasurementData as ApiMeasurementData } from '@/api/hooks/useManualMeasurement';
import { Plus, Eye } from 'lucide-react';

interface MeasurementData {
  chest: string;
  waist: string;
  hips: string;
  legs: string;
}

const BodyMeasurementPage = () => {
  const router = useRouter();
  const { data: measurements, isLoading, error } = useManualMeasurements();

  // Get latest measurement for summary
  const latestMeasurement = measurements && measurements.length > 0 ? measurements[0] : null;

  // Extract key measurements from latest measurement
  const getSummaryMeasurements = (): MeasurementData => {
    if (!latestMeasurement) {
      return { chest: '-', waist: '-', hips: '-', legs: '-' };
    }

    const summary: MeasurementData = { chest: '-', waist: '-', hips: '-', legs: '-' };
    
    latestMeasurement.sections?.forEach((section: MeasurementSection) => {
      section.measurements?.forEach((m: ApiMeasurementData) => {
        const partName = m.bodyPartName?.toLowerCase();
        if (partName?.includes('chest')) summary.chest = `${m.size} cm`;
        if (partName?.includes('waist')) summary.waist = `${m.size} cm`;
        if (partName?.includes('hip')) summary.hips = `${m.size} cm`;
        if (partName?.includes('leg') || partName?.includes('thigh')) summary.legs = `${m.size} cm`;
      });
    });

    return summary;
  };

  return (
    <div className="min-h-screen bg-white p-0">
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Top Navigation with Body Measurement specific data */}
      <MeasurementTopNav 
        title="Current body measurement"
        measurements={getSummaryMeasurements()}
      />

      {/* Body Measurement Content */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          top: '271px',
          left: '401px'
        }}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className="manrope text-3xl font-semibold text-gray-800">
            Body Measurements
          </h1>
          <button 
            onClick={() => router.push('/user/body-measurement/create')}
            className="manrope flex items-center gap-2 bg-[#5D2A8B] text-white px-6 py-2.5 rounded-full hover:bg-purple-700 transition-colors"
          >
            <Plus className="w-4 h-4" />
            New Measurement
          </button>
        </div>
        
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          {isLoading ? (
            <div className="p-12 text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto"></div>
              <p className="manrope text-gray-500 mt-4">Loading measurements...</p>
            </div>
          ) : error ? (
            <div className="p-12 text-center">
              <p className="manrope text-red-500">Failed to load measurements</p>
            </div>
          ) : !measurements || measurements.length === 0 ? (
            <div className="p-12 text-center">
              <p className="manrope text-gray-500 mb-4">No measurements found</p>
              <button 
                onClick={() => router.push('/user/body-measurement/create')}
                className="manrope bg-[#5D2A8B] text-white px-6 py-2 rounded-full hover:bg-purple-700 transition-colors"
              >
        
                Create Your First Measurement
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Name
                    </th>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Type
                    </th>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Subject
                    </th>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Sections
                    </th>
                    <th className="manrope px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Actions
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {measurements.map((measurement: Measurement) => (
                    <tr key={measurement.id} className="hover:bg-gray-50">
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {measurement.firstName} {measurement.lastName}
                      </td>
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {measurement.measurementType}
                      </td>
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {measurement.subject}
                      </td>
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {new Date(measurement.createdAt).toLocaleDateString()}
                      </td>
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {measurement.sections?.length || 0} sections
                      </td>
                      <td className="manrope px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <button
                          onClick={() => router.push(`/user/body-measurement/view?id=${measurement.id}`)}
                          className="text-[#5D2A8B] hover:text-purple-700 flex items-center gap-1"
                        >
                          <Eye className="w-4 h-4" />
                          View
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default BodyMeasurementPage;