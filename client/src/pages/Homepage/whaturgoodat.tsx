import React from 'react';

export default function WhatUrGoodAt() {
  return (
    <section className="w-full min-h-[380px] flex items-center justify-center bg-gradient-to-br from-[#18120b] via-[#1a0e05] to-[#2d1800] relative py-12" style={{borderRadius: '2rem'}}>
      <div className="max-w-6xl w-full flex flex-col items-center justify-center px-4">
        {/* Timeline */}
        <div className="w-full flex flex-row justify-between items-end relative z-10">
          {/* Step 1 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="mb-6">
              <h3 className="text-white text-xl font-bold mb-1">Prototype</h3>
              <p className="text-[#e0e0e0] text-sm font-medium max-w-[180px]">We create the site structure and content with a focus on increasing conversions</p>
            </div>
            <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 to-transparent mb-2"></div>
            <div className="flex items-center bg-[#18120b] rounded-2xl px-6 py-2 shadow-lg border border-[#2d1800] relative">
              <span className="text-white text-base font-semibold">2 hours</span>
              <span className="ml-3 w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center shadow-lg"></span>
            </div>
          </div>
          {/* Step 2 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="mb-6">
              <h3 className="text-white text-xl font-bold mb-1">Concepts</h3>
              <p className="text-[#e0e0e0] text-sm font-medium max-w-[180px]">The client selects the best one out of three concepts that aligns with their vision</p>
            </div>
            <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 to-transparent mb-2"></div>
            <div className="flex items-center bg-[#18120b] rounded-2xl px-6 py-2 shadow-lg border border-[#2d1800] relative">
              <span className="text-white text-base font-semibold">0.5 hours</span>
              <span className="ml-3 w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center shadow-lg"></span>
            </div>
          </div>
          {/* Step 3 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="mb-6">
              <h3 className="text-white text-xl font-bold mb-1">Design Creation</h3>
              <p className="text-[#e0e0e0] text-sm font-medium max-w-[180px]">We develop the chosen design concept for other site sections agreed upon in the prototype</p>
            </div>
            <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 to-transparent mb-2"></div>
            <div className="flex items-center bg-[#18120b] rounded-2xl px-6 py-2 shadow-lg border border-[#2d1800] relative">
              <span className="text-white text-base font-semibold">1 hour</span>
              <span className="ml-3 w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center shadow-lg"></span>
            </div>
          </div>
          {/* Step 4 */}
          <div className="flex flex-col items-center w-1/4">
            <div className="mb-6">
              <h3 className="text-white text-xl font-bold mb-1">Mobile Adaptation</h3>
              <p className="text-[#e0e0e0] text-sm font-medium max-w-[180px]">We ensure full accessibility for the target audience visiting the site, helping it generate returns even faster</p>
            </div>
            <div className="h-24 w-0.5 bg-gradient-to-b from-orange-500 to-transparent mb-2"></div>
            <div className="flex items-center bg-[#18120b] rounded-2xl px-6 py-2 shadow-lg border border-[#2d1800] relative">
              <span className="text-white text-base font-semibold">0.5 hours</span>
              <span className="ml-3 w-5 h-5 rounded-md bg-orange-500 flex items-center justify-center shadow-lg"></span>
            </div>
          </div>
        </div>
        {/* Timeline line */}
        <div className="absolute left-0 right-0 bottom-24 flex items-center z-0">
          <div className="w-full h-1 bg-gradient-to-r from-orange-900 via-orange-500 to-orange-900 opacity-80 rounded-full" style={{height: '6px'}}></div>
        </div>
      </div>
    </section>
  );
}
