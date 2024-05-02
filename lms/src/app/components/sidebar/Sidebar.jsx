"use client";

import React, { useState } from "react";
import Count from "../count/Count";

function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <button
          className="bg-gray-700 text-gray-300 rounded-lg p-2 text-sm"
          onClick={toggleSidebar}
        >
          Open Sidebar
        </button>
      )}
      <div className="flex" style={{ height: 'calc(100vh - 100px)' }}>
        {isOpen && (
          <div className="bg-gray-700 text-gray-300 rounded-lg p-4 pr-6">
            Sidebar
            <button className="ml-2" onClick={toggleSidebar}>
              Close
            </button>
          </div>
        )}
        <div className="flex justify-center items-center flex-1">
          <Count />
        </div>
      </div>
    </>
  );
}

export default Sidebar;
