// Free.jsx
import React from "react";

function Free() {
  return (
    <div className="relative flex justify-between p-2 ml-2 xl:w-[80%] w-[90%] lg:h-[55%] bg-white rounded-3xl">
      {/* Background Gradient Circle */}
      <div
        className="absolute z-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                   w-[180px] h-[180px] rounded-full
                   bg-gradient-to-b from-fuchsia-900 via-blue-800 to-blue-900"
      />

      {/* Left Section */}
      <div className="flex flex-col justify-between gap-6 z-10 w-[50%] p-6 backdrop-blur-md bg-orange-100/30 rounded-lg shadow-md">
        <div>
          <h1 className="text-4xl font-semibold">Free</h1>
          <h1 className="text-4xl font-semibold text-gray-600">Case</h1>
          <h1 className="text-4xl font-semibold text-gray-600">Review</h1>
        </div>

        <div className="space-y-3">
          <h1 className="flex items-center gap-1 text-xs font-semibold">
            <span className="material-symbols-outlined bg-gray-300 rounded-full px-1 text-lg">shield_lock</span>
            100% Confidential
          </h1>
          <h1 className="flex items-center gap-1 text-xs font-semibold">
            <span className="material-symbols-outlined bg-gray-300 rounded-full px-1 text-lg">check</span>
            No Win, No Fee
          </h1>
          <h1 className="flex items-center gap-1 text-xs font-semibold">
            <span className="material-symbols-outlined bg-gray-300 rounded-full px-1 text-lg">balance</span>
            Free Case Evaluation
          </h1>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between items-end gap-4 z-10 w-[50%] p-6">
        <div className="text-right">
          <h1 className="text-xl font-semibold text-gray-600">We are here</h1>
          <h1 className="text-xl font-semibold text-gray-600">to help!</h1>
        </div>

        <div className="flex">
          <button className="lg:px-4 lg:py-2 px-6 py-1 bg-[#DAA06D] text-white rounded-full lg:text-lg text-sm">
            Contact us
          </button>
          <button className="p-2 pt-3 bg-[#DAA06D] text-white rounded-full">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Free;
