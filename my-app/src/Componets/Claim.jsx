// Claim.jsx
import React from "react";

function Claim() {
  const inputFields = [
    "First Name *",
    "Last Name *",
    "Phone Number *",
    "Email *",
    "Job Title *",
    "Tell us your story (optional)",
  ];

  return (
    <div className="xl:w-[85%] w-[90%] px-6 py-8 rounded-3xl lg:h-[90%] backdrop-blur-md bg-blue-400/30 shadow-md">
      <h1 className="text-2xl font-bold text-white mb-4 xl:mb-6">Claim Offer</h1>

      {/* Input Fields */}
      <div className="flex flex-wrap gap-4">
        {inputFields.map((placeholder, i) => (
          <div key={i} className="flex-1 min-w-[100%] md:min-w-[48%] lg:min-w-[38%]">
            <input
              type="text"
              required
              placeholder={placeholder}
              className="w-full border-b border-gray-300 p-2 bg-transparent text-white placeholder-white focus:outline-none"
            />
          </div>
        ))}

        {/* Input with Calendar Icon */}
        <div className="flex items-center border-b border-gray-400 flex-1 min-w-[100%] md:min-w-[38%]">
          <input
            type="text"
            required
            placeholder="Date *"
            className="w-full bg-transparent outline-none p-2 text-white placeholder-white"
          />
          <span className="material-symbols-outlined text-white mr-2">calendar_clock</span>
        </div>

        <div className="flex items-center border-b border-gray-400 flex-1 min-w-[100%] md:min-w-[38%]">
          <input
            type="text"
            required
            placeholder="Date of Diagnosis *"
            className="w-full bg-transparent outline-none p-2 text-white placeholder-white"
          />
          <span className="material-symbols-outlined text-white mr-2">calendar_clock</span>
        </div>

        {/* Dropdown-like Input */}
        <div className="flex items-center border-b border-gray-400 flex-1 min-w-[100%] md:min-w-[38%]">
          <input
            type="text"
            required
            placeholder="Select Diagnosis *"
            className="w-full bg-transparent outline-none p-2 text-white placeholder-white"
          />
          <span className="material-symbols-outlined text-white mr-2">keyboard_arrow_down</span>
        </div>
      </div>

      {/* Consent Checkbox */}
      <div className="flex space-x-2 mt-4 text-white">
        <input type="checkbox" id="terms" className="w-4 h-4 mt-1" required />
        <label htmlFor="terms" className="text-sm">
          I agree to the <span className="underline">Policy</span> and <span className="underline">Disclaimer</span> and give my express written consent to be contacted regarding my case options. I understand that I may be contacted using automatic dialing equipment. Message and data rates may apply. My consent does not require purchase. This is legal advertising.
        </label>
      </div>

      {/* Human Verification */}
      <div className="flex space-x-2 mt-2 text-white">
        <input type="checkbox" id="verify" className="w-3 h-3 mt-1" required />
        <label htmlFor="verify" className="text-sm">Please verify you are a person</label>
      </div>

      {/* Submit Button */}
      <div className="bg-[#f8d6cf] text-black font-semibold text-center py-2 mt-4 rounded-md cursor-pointer">
        <button type="submit">
          <span className="block lg:hidden">Start</span>
          <span className="hidden lg:inline">Start your Claim Now</span>
        </button>
      </div>
    </div>
  );
}

export default Claim;
