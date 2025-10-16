import React from "react";

type DashboardLayoutProps = {
  children: React.ReactNode;
};

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  return (
    <div className="bg-purple-50 min-h-screen p-6">
      <div className="max-w-7xl mx-auto">{children}</div>
    </div>
  );
};

export default DashboardLayout;
