// Description.jsx
import React from "react";

function Description() {
  return (
    <div className="xl:w-[80%] w-[90%] ml-2 mt-2 rounded-3xl bg-[#f8d6cf] pl-6 pr-4 xl:pr-10 py-5 xl:py-2 lg:py-0 lg:pr-0 lg:h-[35%]">
      <div>
        <h1 className="text-violet-900 text-2xl font-bold">
          Have you or a loved one been affected by Mesothelioma?
        </h1>
        <p className="py-1 xl:py-2">
          As a woman, you've carried the weight of care, love, and resilience.
          Now it’s time someone stands with you.
        </p>
        <ul className="list-disc pl-4 space-y-1">
          <li>Secondary asbestos exposure is common</li>
          <li>Misdiagnosis delays are more frequent in women</li>
          <li>Women have won significant legal settlements</li>
        </ul>
      </div>
    </div>
  );
}

export default Description;
