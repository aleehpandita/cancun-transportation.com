import React from "react";

// components

import CardStats from "components/Cards/CardStats.js";

export default function HeaderPoS() {
  return (
    <>
      {/* Header */}
      <div className="relative bg-gray-900 md:pt-30 pb-32 pt-12">
        <div className="px-4 md:px-10 mx-auto w-full">
          <div>
            {/* Card stats */}
            <div className="flex flex-wrap">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
              
  <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
  <form className="mt-6 mb-4">
              <div className="mb-3 pt-0">
                <input
                  type="text"
                  placeholder="Search"
                  className="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"
                />
              </div>
            </form>
  </div>

              </div>
             
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
