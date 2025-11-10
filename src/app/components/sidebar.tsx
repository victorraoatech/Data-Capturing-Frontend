
"use client";

import React, { useState, Dispatch, SetStateAction, ReactNode } from 'react';
import { 
  Home, 
  Calendar, 
  BookOpen, 
  ClipboardCheck, 
  Award, 
  Users, 
  Settings, 
  UserCircle, 
  Menu, 
  X,
  ChevronRight,
  ChevronDown
} from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';


interface SidebarProps {
  onShow: boolean;
  setShow: Dispatch<SetStateAction<boolean>>;
}

interface MenuBtnProps {
  icon: ReactNode;
  positioning?: string;
  onClick: () => void;
  toggleLeftPadding?: string;
}

// Reusable Menu Button Component
const MenuBtn: React.FC<MenuBtnProps> = ({ icon, positioning = '', onClick, toggleLeftPadding = '' }) => (
  <button
    type="button"
    className={`${positioning} inline-flex cursor-pointer items-center justify-center rounded-md p-2 pl-0 text-gray-400 ${toggleLeftPadding}`}
    onClick={onClick}
  >
    <span className="sr-only">Toggle menu</span>
    {icon}
  </button>
);


export const UserSidebar: React.FC<SidebarProps> = ({ onShow, setShow }) => {
  // const [bodymeasurementDropdownOpen, setBodymeasurementDropdownOpen] = useState(false);
  const pathname = usePathname();
  

  const toggleSidebar = (): string => onShow ? "block" : "hidden";
  const toggleLeftPadding = (): string => onShow ? "pl-4 md:pl-12" : "";

  // Helper function to check if a route is active
  const isActive = (route: string): boolean => {
    if (route === '/user' && pathname === '/user') return true;
    if (route !== '/user' && pathname.startsWith(route)) return true;
    return false;
  };

  // Helper function to get active styles
  const getActiveStyles = (route: string) => {
    return isActive(route) ? {
      background: '#5D2A8B',
      borderRadius: '20px',
      width: '275px',
      height: '71px'
    } : {};
  };

  // Helper function to get text color
  const getTextColor = (route: string) => {
    return isActive(route) ? '#FFFFFF' : '#6E6E6EB2';
  };

  return (
    <aside>
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;500;600;700&display=swap');
        .manrope { font-family: 'Manrope', sans-serif; }
      `}</style>
      
      <div 
        className={`${toggleSidebar()} bg-[#FFFFFF] fixed overflow-y-auto z-10 shadow-sm`}
        style={{
          width: '328px',
          height: '633px',
          top: '80px',
          left: '37px',
          borderRadius: '20px',
          boxShadow: '0px 2px 8px 0px rgba(0, 0, 0, 0.1)'
        }}
      >
        {/* Header with Logo and Close Button */}
        <div 
          className="flex items-center"
          style={{
            width: '252px',
            height: '48px',
            justifyContent: 'space-between',
            top: '43px',
            left: '38px',
            position: 'absolute'
          }}
        >
          <Image 
            src="/Group 1.png" 
            alt="Brand Logo" 
            width={55} 
            height={48}
            className="object-contain"
          />
          
          <button
            type="button"
            onClick={() => setShow(!onShow)}
            className="cursor-pointer"
          >
            <Image 
              src="/Panel Left Close Streamline Lucide Line.png" 
              alt="Close Panel" 
              width={24} 
              height={24}
              className="object-contain"
            />
          </button>
        </div>

        <nav className="flex flex-col text-white" style={{ gap: '40px' }}>
          <div className="cursor-pointer space-y-3">
            <Link href={`/user`}>
              <div 
                className="manrope flex items-center rounded-lg cursor-pointer absolute"
                style={{
                  ...getActiveStyles('/user'),
                  top: '169px',
                  left: '15px',
                  ...(isActive('/user') ? {} : {
                    width: '275px',
                    height: '71px'
                  })
                }}
              >
                <div 
                  className="flex items-center"
                  style={{
                    width: '139px',
                    height: '27px',
                    position: 'absolute',
                    top: '22px',
                    left: '23px',
                    gap: '12px'
                  }}
                >
                  <Image 
                    src="/Dashboard Circle Streamline Core Remix - Free.png" 
                    alt="Dashboard" 
                    width={24} 
                    height={24}
                    className="object-contain"
                  />
                  <span 
                    className="manrope"
                    style={{
                      fontWeight: 500,
                      fontSize: '20px',
                      lineHeight: '100%',
                      color: getTextColor('/user'),
                      width: '103px',
                      height: '27px'
                    }}
                  >
                    Dashboard
                  </span>
                </div>
              </div>
            </Link>

            {/* Menu Items Container */}
            <div 
              className="absolute"
              style={{
                width: '234px',
                height: '161px',
                top: '280px',
                left: '38px',
                gap: '40px',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <Link href="/user/body-measurement">
                <div 
                  className="manrope flex items-center cursor-pointer hover:bg-gray-100 relative"
                  style={{
                    ...getActiveStyles('/user/body-measurement'),
                    ...(isActive('/user/body-measurement') ? {
                      padding: '22px 23px'
                    } : {
                      width: '218px',
                      height: '27px',
                      gap: '12px'
                    })
                  }}
                >
                  <div 
                    className="flex items-center"
                    style={{
                      gap: '12px'
                    }}
                  >
                    <Image 
                      src="/Body Streamline Ionic Filled.png" 
                      alt="Body Measurement" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                    <span 
                      className="manrope"
                      style={{
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: getTextColor('/user/body-measurement')
                      }}
                    >
                      Body Measurement
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/user/object-dimension">
                <div 
                  className="manrope flex items-center cursor-pointer hover:bg-gray-100 relative"
                  style={{
                    ...getActiveStyles('/user/object-dimension'),
                    ...(isActive('/user/object-dimension') ? {
                      padding: '22px 23px'
                    } : {
                      width: '234px',
                      height: '27px',
                      gap: '12px'
                    })
                  }}
                >
                  <div 
                    className="flex items-center"
                    style={{
                      gap: '12px'
                    }}
                  >
                    <Image 
                      src="/Object Scan Streamline Tabler Line.png" 
                      alt="Object Measurement" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                    <span 
                      className="manrope"
                      style={{
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: getTextColor('/user/object-dimension')
                      }}
                    >
                      Object Measurement
                    </span>
                  </div>
                </div>
              </Link>

              <Link href="/user/questionaire">
                <div 
                  className="manrope flex items-center cursor-pointer hover:bg-gray-100 relative"
                  style={{
                    ...getActiveStyles('/user/questionaire'),
                    ...(isActive('/user/questionaire') ? {
                      padding: '22px 23px'
                    } : {
                      width: '170px',
                      height: '27px',
                      gap: '12px'
                    })
                  }}
                >
                  <div 
                    className="flex items-center"
                    style={{
                      gap: '12px'
                    }}
                  >
                    <Image 
                      src="/List Dropdown Streamline Carbon.png" 
                      alt="Questionnaire" 
                      width={24} 
                      height={24}
                      className="object-contain"
                    />
                    <span 
                      className="manrope"
                      style={{
                        fontWeight: 500,
                        fontSize: '20px',
                        lineHeight: '100%',
                        color: getTextColor('/user/questionaire')
                      }}
                    >
                      Questionnaire
                    </span>
                  </div>
                </div>
              </Link>
            </div>
          </div>

          <div 
            className="absolute"
            style={{
              width: '105.39px',
              height: '27px',
              top: '547px',
              left: '38px',
              gap: '12px',
              display: 'flex',
              alignItems: 'center'
            }}
          >
            <button 
              className="manrope flex items-center hover:opacity-80"
              style={{
                gap: '12px'
              }}
              onClick={() => {/* Add logout logic */}}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7.5 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V4.16667C2.5 3.72464 2.67559 3.30072 2.98816 2.98816C3.30072 2.67559 3.72464 2.5 4.16667 2.5H7.5" stroke="#FF6161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M13.3333 14.1667L17.5 10L13.3333 5.83334" stroke="#FF6161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M17.5 10H7.5" stroke="#FF6161" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span 
                className="manrope"
                style={{
                  width: '67px',
                  height: '27px',
                  fontWeight: 500,
                  fontSize: '20px',
                  lineHeight: '100%',
                  color: '#FF6161'
                }}
              >
                Logout
              </span>
            </button>
          </div>
        </nav>
        
        
      </div>

   
      {!onShow && (
        <MenuBtn
          positioning="absolute top-3.5 z-20"
          icon={<Menu className="h-6 w-6" />}
          onClick={() => setShow(!onShow)}
          toggleLeftPadding={toggleLeftPadding()}
        />
      )}
    </aside>
  );
};



// Admin Sidebar Component
export const AdminSidebar: React.FC<SidebarProps> = ({ onShow, setShow }) => {
  const [courseDropdownOpen, setCourseDropdownOpen] = useState(false);
  const [assessmentDropdownOpen, setAssessmentDropdownOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [settingsDropdownOpen, setSettingsDropdownOpen] = useState(false);

  const toggleSidebar = (): string => onShow ? "block" : "hidden";
  const toggleLeftPadding = (): string => onShow ? "pl-4 md:pl-12" : "";

  return (
    <aside>
      <div className={`${toggleSidebar()} bg-[#572E7F] fixed h-full w-64 space-y-6 overflow-y-auto border-r border-opacity-80 z-10`}>
        {/* Header */}
        <div className="flex w-full items-center justify-between px-4 py-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-700 font-bold">R</span>
            </div>
            <span className="text-white font-semibold">RAOATECH</span>
          </div>
          <MenuBtn
            icon={<X className="h-6 w-6 text-white" />}
            onClick={() => setShow(!onShow)}
            toggleLeftPadding={toggleLeftPadding()}
          />
        </div>

        {/* Navigation */}
        <nav className="px-3 text-white space-y-2">
          {/* Home */}
          <div className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-800 rounded cursor-pointer">
            <Home className="w-5 h-5" />
            <span>Home</span>
          </div>

          {/* Bookings */}
          <div className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-800 rounded cursor-pointer">
            <Calendar className="w-5 h-5" />
            <span>Bookings</span>
          </div>

          {/* Courses Dropdown */}
          <div>
            <div
              className="flex items-center justify-between py-2 px-4 hover:bg-purple-800 rounded cursor-pointer"
              onClick={() => setCourseDropdownOpen(!courseDropdownOpen)}
            >
              <div className="flex items-center space-x-3">
                <BookOpen className="w-5 h-5" />
                <span>Courses</span>
              </div>
              {courseDropdownOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {courseDropdownOpen && (
              <div className="ml-8 space-y-1 mt-1">
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Course Report
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Create Courses
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Curriculum
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Attendance
                </div>
              </div>
            )}
          </div>

          {/* Assessments Dropdown */}
          <div>
            <div
              className="flex items-center justify-between py-2 px-4 hover:bg-purple-800 rounded cursor-pointer"
              onClick={() => setAssessmentDropdownOpen(!assessmentDropdownOpen)}
            >
              <div className="flex items-center space-x-3">
                <ClipboardCheck className="w-5 h-5" />
                <span>Assessments</span>
              </div>
              {assessmentDropdownOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {assessmentDropdownOpen && (
              <div className="ml-8 space-y-1 mt-1">
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Create Assessment
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Question Bank
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Theory Based
                </div>
              </div>
            )}
          </div>

          {/* Certificates */}
          <div className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-800 rounded cursor-pointer">
            <Award className="w-5 h-5" />
            <span>Certificates</span>
          </div>

          {/* Users Dropdown */}
          <div>
            <div
              className="flex items-center justify-between py-2 px-4 hover:bg-purple-800 rounded cursor-pointer"
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
            >
              <div className="flex items-center space-x-3">
                <Users className="w-5 h-5" />
                <span>Users</span>
              </div>
              {userDropdownOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {userDropdownOpen && (
              <div className="ml-8 space-y-1 mt-1">
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  All Users
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Archived Users
                </div>
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Learner Report
                </div>
              </div>
            )}
          </div>

          {/* Settings Section */}
          <div className="border-t border-purple-700 pt-4 mt-4">
            <div
              className="flex items-center justify-between py-2 px-4 hover:bg-purple-800 rounded cursor-pointer"
              onClick={() => setSettingsDropdownOpen(!settingsDropdownOpen)}
            >
              <div className="flex items-center space-x-3">
                <Settings className="w-5 h-5" />
                <span>Settings</span>
              </div>
              {settingsDropdownOpen ? (
                <ChevronDown className="w-5 h-5" />
              ) : (
                <ChevronRight className="w-5 h-5" />
              )}
            </div>
            {settingsDropdownOpen && (
              <div className="ml-8 space-y-1 mt-1">
                <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer text-sm">
                  Group Management
                </div>
              </div>
            )}
          </div>

          {/* Profile */}
          <div className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-800 rounded cursor-pointer">
            <UserCircle className="w-5 h-5" />
            <span>Profile</span>
          </div>
        </nav>
      </div>

      {/* Mobile menu button */}
      {!onShow && (
        <MenuBtn
          positioning="absolute top-3.5 z-20"
          icon={<Menu className="h-6 w-6" />}
          onClick={() => setShow(!onShow)}
          toggleLeftPadding={toggleLeftPadding()}
        />
      )}
    </aside>
  );
};