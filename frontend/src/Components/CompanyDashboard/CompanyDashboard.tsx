import React from "react";
import { Outlet } from "react-router";

type Props = {
  children: React.ReactNode;
  ticker: string;
};

function CompanyDashboard({ children, ticker }: Props) {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen flex flex-col md:ml-64">
      <div className="bg-lightGreen py-12">
        <div className="px-4 md:px-6 mx-auto w-full">
          <h1 className="text-4xl font-bold text-center mb-8">{ticker}</h1>
          <div className="flex flex-wrap">{children}</div>
          <div className="flex flex-wrap">
            <Outlet context={ticker} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CompanyDashboard;
