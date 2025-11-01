
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
  const [bodymeasurementDropdownOpen, setBodymeasurementDropdownOpen] = useState(false);
  

  const toggleSidebar = (): string => onShow ? "block" : "hidden";
  const toggleLeftPadding = (): string => onShow ? "pl-4 md:pl-12" : "";

  return (
    <aside>
      <div className={`${toggleSidebar()} bg-[#572E7F] fixed h-full w-64 space-y-6 overflow-y-auto border-r border-opacity-80 z-10`}>
        {/* Header */}
        <div className="flex w-full items-center justify-between px-4 py-6">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
              <span className="text-purple-700 font-bold">DC</span>
            </div>
            <span className="text-white font-semibold">Data Capture</span>
          </div>
          <MenuBtn
            icon={<X className="h-6 w-6 text-white" />}
            onClick={() => setShow(!onShow)}
            toggleLeftPadding={toggleLeftPadding()}
          />
        </div>
          <nav className="mt-6 flex h-3/4 flex-col justify-between px-2 text-white">
          <div className="cursor-pointer space-y-3">
            <Link href={`/user`}>
              <div className="flex items-center space-x-3 py-2 px-4 hover:bg-purple-800 rounded cursor-pointer">
                <Home className="w-5 h-5" />
                <span className="text-white">Home</span>
              </div>
            </Link>

            <div>
              <div
                className="flex items-center justify-between py-2 px-4 hover:bg-purple-800 rounded cursor-pointer"
                onClick={() => setBodymeasurementDropdownOpen(!bodymeasurementDropdownOpen)}
              >
                <div className="flex items-center space-x-3">
                  <BookOpen  className="w-5 h-5" />
                  <span className="text-white">Data Collections</span>
                </div>
                {bodymeasurementDropdownOpen ? (
                  <ChevronDown className="w-5 h-5" />
                ) : (
                  <ChevronRight className="w-5 h-5" />
                )}
              </div>

              {bodymeasurementDropdownOpen && (
                <div className="ml-8 space-y-2">
                  <Link href="/user/body-measurement">
                    <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer">
                      <span>Body Measurements</span>
                    </div>
                  </Link>
                  <Link href="/user/object-dimension">
                    <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer">
                      <span>Object Dimensions</span>
                    </div>
                  </Link>
                  <Link href="/user/questionaire">
                    <div className="py-2 px-4 hover:bg-purple-700 rounded cursor-pointer">
                      <span>Questionnaire</span>
                    </div>
                  </Link>
                </div>
               
              )}
            </div>
          </div>

          {/* <div className="p-8">
            <Image
              src={""}
              alt={"data capture logo"}
              width={300}
              height={200}
              className="w-full h-full object-cover"
            />
          </div> */}
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