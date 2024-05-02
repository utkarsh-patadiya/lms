import React from "react";
import Count from "../count/Count";
function Sidebar() {
  return (
    <div className="flex h-screen">
    <div className="bg-gray-700 text-gray-300 rounded-lg p-4 pr-6">Sidebar</div>
    <div className="flex justify-center items-center flex-1">
      <Count />
    </div>
  </div>
  );
}

export default Sidebar;
