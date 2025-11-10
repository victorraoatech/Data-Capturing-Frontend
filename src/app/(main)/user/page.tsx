'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import ActionModal from '@/app/components/ActionModal';
import { MeasurementTopNav } from '@/app/components/MeasurementTopNav';

const Page = () => {
  const [selectedRows, setSelectedRows] = useState<number[]>([]);
  const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

  const toggleRowSelection = (rowIndex: number) => {
    setSelectedRows(prev => 
      prev.includes(rowIndex) 
        ? prev.filter(i => i !== rowIndex)
        : [...prev, rowIndex]
    );
  };

  const toggleDropdown = (rowIndex: number, event: React.MouseEvent) => {
    const rect = (event.target as HTMLElement).getBoundingClientRect();
    setModalPosition({
      top: rect.bottom + 5,
      left: rect.left - 100 // Position modal to the left of the button
    });
    setDropdownOpen(dropdownOpen === rowIndex ? null : rowIndex);
  };

  const closeDropdown = () => {
    setDropdownOpen(null);
  };

  const handleViewMeasurement = () => {
    console.log('View Measurement clicked');
  };

  const handleEditMeasurement = () => {
    console.log('Edit Measurement clicked');
  };

  const handleDelete = () => {
    console.log('Delete clicked');
  };

  // Close dropdown when clicking outside
  const handleOutsideClick = (e: React.MouseEvent) => {
    if (dropdownOpen !== null) {
      closeDropdown();
    }
  };

  return (
    <div className="min-h-screen bg-white p-0" onClick={handleOutsideClick}>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>

      {/* Top Navigation */}
      <MeasurementTopNav />

      {/* Overview Section */}
      <div 
        className="absolute"
        style={{
          width: '958px',
          height: '202px',
          top: '271px',
          left: '401px'
        }}
      >
        <h2 className="manrope text-2xl font-semibold text-gray-800">Overview</h2>

        {/* Three Cards Container */}
        <div 
          className="absolute flex"
          style={{
            width: '958px',
            height: '146px',
            top: '56px',
            gap: '53px'
          }}
        >
          {/* Card 1 - Total Body Measurement */}
          <div 
            className="relative"
            style={{
              background: '#F4EFFA',
              width: '284px',
              height: '146px',
              borderRadius: '20px'
            }}
          >
            {/* Total Measurement and 08 */}
            <div 
              className="absolute"
              style={{
                width: '105px',
                height: '89px',
                top: '25px',
                left: '26px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span 
                className="manrope"
                style={{
                  color: '#6E6E6EB2',
                  width: '105px',
                  height: '44px',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%'
                }}
              >
                Total Body Measurement
              </span>
              <span 
                className="manrope"
                style={{
                  width: '105px',
                  height: '33px',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '100%',
                  color: '#1A1A1A'
                }}
              >
                08
              </span>
            </div>

            {/* Card Image */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                width: '30px',
                height: '30px',
                top: '17px',
                left: '236px',
                borderRadius: '40px',
                background: '#FFFFFF80'
              }}
            >
              <Image 
                src="/Body Streamline Ionic Filled.png" 
                alt="Body" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>

            {/* Create New Button */}
            <button 
              className="manrope absolute"
              style={{
                width: '86px',
                height: '28px',
                top: '106px',
                left: '180px',
                gap: '10px',
                borderRadius: '20px',
                paddingTop: '6px',
                paddingRight: '10px',
                paddingBottom: '6px',
                paddingLeft: '10px',
                background: '#FFFFFF80',
                fontSize: '12px',
                color: '#5D2A8B'
              }}
            >
              Create New
            </button>
          </div>

          {/* Card 2 - Total Object Measurement */}
          <div 
            className="relative"
            style={{
              background: '#FBF8EF',
              width: '284px',
              height: '146px',
              borderRadius: '20px'
            }}
          >
            {/* Total Object Container */}
            <div 
              className="absolute"
              style={{
                width: '105px',
                height: '89px',
                top: '25px',
                left: '26px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span 
                className="manrope"
                style={{
                  color: '#6E6E6EB2',
                  width: '105px',
                  height: '44px',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%'
                }}
              >
                Total Object Measurement
              </span>
              <span 
                className="manrope"
                style={{
                  width: '105px',
                  height: '33px',
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '100%',
                  color: '#1A1A1A'
                }}
              >
                --
              </span>
            </div>

            {/* Object Image */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                background: '#FFFFFF80',
                width: '30px',
                height: '30px',
                top: '17px',
                left: '236px',
                borderRadius: '40px'
              }}
            >
              <Image 
                src="/Object Scan Streamline Tabler Line.png" 
                alt="Object" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>

            {/* Create New Button */}
            <button 
              className="manrope absolute"
              style={{
                width: '86px',
                height: '28px',
                top: '106px',
                left: '180px',
                gap: '10px',
                borderRadius: '20px',
                paddingTop: '6px',
                paddingRight: '10px',
                paddingBottom: '6px',
                paddingLeft: '10px',
                background: '#FFFFFF80',
                fontSize: '12px',
                color: '#5D2A8B'
              }}
            >
              Create New
            </button>
          </div>

          {/* Card 3 - Total Questionnaire */}
          <div 
            className="relative"
            style={{
              width: '284px',
              height: '146px',
              borderRadius: '20px',
              background: '#FCEEEE'
            }}
          >
            {/* Total Questionnaire Container */}
            <div 
              className="absolute"
              style={{
                width: '105px',
                height: '89px',
                top: '25px',
                left: '26px',
                gap: '12px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <span 
                className="manrope"
                style={{
                  width: '106px',
                  height: '44px',
                  fontWeight: 400,
                  fontSize: '16px',
                  lineHeight: '100%',
                  color: '#6E6E6EB2'
                }}
              >
                Total Questionnaire
              </span>
              <span 
                className="manrope"
                style={{
                  fontWeight: 500,
                  fontSize: '24px',
                  lineHeight: '100%',
                  width: '105px',
                  height: '33px',
                  color: '#1A1A1A'
                }}
              >
                08
              </span>
            </div>

            {/* Create New Button */}
            <button 
              className="manrope absolute"
              style={{
                width: '86px',
                height: '28px',
                top: '106px',
                left: '180px',
                gap: '10px',
                borderRadius: '20px',
                paddingTop: '6px',
                paddingRight: '10px',
                paddingBottom: '6px',
                paddingLeft: '10px',
                background: '#FFFFFF80',
                fontSize: '12px',
                color: '#5D2A8B'
              }}
            >
              Create New
            </button>

            {/* Image */}
            <div 
              className="absolute flex items-center justify-center"
              style={{
                width: '30px',
                height: '30px',
                top: '17px',
                left: '236px',
                borderRadius: '40px',
                background: '#FFFFFF80'
              }}
            >
              <Image 
                src="/List Dropdown Streamline Carbon.png" 
                alt="Questionnaire" 
                width={20} 
                height={20}
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Total Summary Section */}
      <div 
        className="absolute bg-white shadow-sm"
        style={{
          width: '958px',
          height: '547px',
          top: '596px',
          left: '401px',
          borderRadius: '20px',
          padding: '24px'
        }}
      >
        {/* Total Summary and Export Container */}
        <div 
          className="flex items-center justify-between mb-6"
          style={{
            width: '100%',
            height: '40px'
          }}
        >
          {/* Total Summary Text */}
          <h2 
            className="manrope"
            style={{
              fontWeight: 600,
              fontSize: '26px',
              lineHeight: '100%',
              width: '185px',
              height: '36px',
              color: '#1A1A1A'
            }}
          >
            Total Summary
          </h2>

          {/* Export Button */}
          <button 
            className="manrope flex items-center justify-center gap-2"
            style={{
              width: '136px',
              height: '40px',
              borderRadius: '40px',
              border: '1px solid #E4D8F3',
              background: 'white'
            }}
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.5 12.5V15.8333C17.5 16.2754 17.3244 16.6993 17.0118 17.0118C16.6993 17.3244 16.2754 17.5 15.8333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V12.5" stroke="#6E6E6EB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5.83333 8.33333L10 12.5L14.1667 8.33333" stroke="#6E6E6EB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M10 12.5V2.5" stroke="#6E6E6EB2" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <span 
              className="manrope"
              style={{
                fontWeight: 500,
                fontSize: '16px',
                lineHeight: '100%',
                textAlign: 'center',
                width: '50px',
                height: '22px',
                color: '#6E6E6EB2'
              }}
            >
              Export
            </span>
          </button>
        </div>

        {/* Table Container */}
        <div 
          className="overflow-x-auto"
          style={{
            width: '100%'
          }}
        >
          <table className="w-full">
            <thead>
              <tr>
                <th 
                  style={{
                    width: '60px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3'
                  }}
                >
                  {/* Checkbox header */}
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '132px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  Name
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '131px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  Measurement Type
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '132px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  Chest/ length (cm)
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '132px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  Waist/ width (cm)
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '131px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  Hips/ Height (cm)
                </th>
                <th 
                  className="manrope text-left"
                  style={{
                    width: '131px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3',
                    fontWeight: 500,
                    fontSize: '14px',
                    color: '#6E6E6EB2'
                  }}
                >
                  legs (cm)
                </th>
                <th 
                  style={{
                    width: '131px',
                    height: '54px',
                    padding: '16px 10px',
                    borderBottom: '1px solid #E4D8F3'
                  }}
                >
                  ...
                </th>
              </tr>
            </thead>
            <tbody>
              {[
                { name: 'Emmanuel', type: 'Body', color: '#5D2A8B', measurements: [35, 35, 35, 35] },
                { name: 'Tobi Wale', type: 'Body', color: '#5D2A8B', measurements: [21, 21, 21, 21] },
                { name: 'Ada Uzo', type: 'Body', color: '#5D2A8B', measurements: [34, 34, 34, 34] },
                { name: 'Dispatch', type: 'Object', color: '#F59E0B', measurements: [20, 20, 20, 20] },
                { name: 'My Box', type: 'Object', color: '#F59E0B', measurements: [10, 10, 10, 10] },
                { name: 'Favour Alo', type: 'Body', color: '#5D2A8B', measurements: [54, 54, 54, 54] }
              ].map((row, index) => (
                <tr 
                  key={index}
                  style={{
                    backgroundColor: selectedRows.includes(index) ? '#F4EFFA' : 'transparent'
                  }}
                >
                  {/* Checkbox */}
                  <td style={{ padding: '16px 10px', borderBottom: '1px solid #E4D8F3', position: 'relative' }}>
                    <div 
                      className="relative cursor-pointer"
                      style={{
                        width: '25px',
                        height: '25px',
                        top: '10px',
                        left: '17px',
                        borderRadius: '4px',
                        border: '1px solid #6E6E6E33',
                        background: selectedRows.includes(index) ? '#5D2A8B' : 'white',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                      }}
                      onClick={() => toggleRowSelection(index)}
                    >
                      {selectedRows.includes(index) && (
                        <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1 5L5 9L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      )}
                    </div>
                  </td>
                  
                  {/* Name */}
                  <td className="manrope" style={{ padding: '16px 10px', borderBottom: '1px solid #E4D8F3', fontSize: '14px', color: '#1A1A1A' }}>
                    {row.name}
                  </td>
                  
                  {/* Type */}
                  <td className="manrope" style={{ padding: '16px 10px', borderBottom: '1px solid #E4D8F3', fontSize: '14px', color: row.color }}>
                    {row.type}
                  </td>
                  
                  {/* Measurements */}
                  {row.measurements.map((measurement, i) => (
                    <td key={i} className="manrope" style={{ padding: '16px 10px', borderBottom: '1px solid #E4D8F3', fontSize: '14px', color: '#1A1A1A' }}>
                      {measurement}
                    </td>
                  ))}
                  
                  {/* Actions */}
                  <td style={{ padding: '16px 10px', borderBottom: '1px solid #E4D8F3', textAlign: 'center' }}>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        toggleDropdown(index, e);
                      }}
                      className="cursor-pointer"
                    >
                      ...
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Action Modal */}
      <ActionModal
        isOpen={dropdownOpen !== null}
        onClose={closeDropdown}
        onViewMeasurement={handleViewMeasurement}
        onEditMeasurement={handleEditMeasurement}
        onDelete={handleDelete}
        position={modalPosition}
      />
    </div>
  );
};

export default Page;