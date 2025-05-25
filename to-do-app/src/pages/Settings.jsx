import React from "react";

export default function Settings({ collapsed }) {
  return (
    <div
      className={`absolute top-20 right-0 px-2 py-5 text-gray-900 
      ${collapsed ? "w-[calc(100%-72px)]" : "w-[calc(100%-256px)]"} 
       overflow-y-auto`}
    >
      <div className="personal-info flex flex-col m-2">
        <div className="border-b border-gray-400 mb-2 pb-5">
          <h1 className="text-left mb-1 font-medium text-xl">
            Personal Information
          </h1>
          <p className="text-left text-gray-600">
            This information will be displayed publicly so be careful what you
            share.
          </p>
        </div>

        <div className="flex justify-between border-b border-gray-400 pb-4 pt-4">
          <div className="w-20 h-20 bg-amber-100 rounded-2xl"></div>
          <button className="">Change Avatar</button>
        </div>

        <div className="flex justify-between border-b place-content-center border-gray-400 pb-4 pt-4">
          <h1>Full Name</h1>
          <h1>Hamna Liaquat</h1>
          <button className="">Change Avatar</button>
        </div>

        <div className="flex justify-between items-center border-b border-gray-400 py-4">
          {/* Label + Value side by side */}
          <div className="flex gap-4 items-center">
            <h1 className="text-sm text-gray-500">Full Name:</h1>
            <h1 className="text-base font-medium">Hamna Liaquat</h1>
          </div>

          {/* Update Button */}
          <button className="update flex items-center justify-center px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
            Update
          </button>
        </div>
      </div>
    </div>
  );
}
