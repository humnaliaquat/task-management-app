import React from "react";
import { useOutletContext } from "react-router-dom";

export default function Settings() {
  const { collapsed } = useOutletContext();
  return (
    <div
      className={`absolute top-18 right-0 px-2 h-[calc(100vh-80px)] overflow-y-auto scroll-smooth py-5    text-gray-900  
      ${collapsed ? "w-[calc(100%-72px)]" : "w-[calc(100%-256px)]"} 
       overflow-y-auto`}
      style={{
        backgroundColor: "var(--card)",
        color: "var(--text)",
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 m-2 items-start border-b border-gray-200 pb-15">
        {/* Header Section */}
        <div className="md:col-span-3 space-y-2 text-left">
          <h2 className="text-xl font-medium">Personal Information</h2>
          <p className="text-sm text-gray-500">
            Update your personal information to keep your profile up to date.
          </p>
        </div>
        {/* Profile Information Form */}
        <div className="flex flex-col gap-6 md:col-span-7">
          <div className="flex items-center gap-7">
            <div className="bg-teal-300 w-24 h-24 rounded-2xl"></div>
            <div className="flex flex-col gap-2 items-start">
              <button className=" change-avatar-btn">Change Avatar</button>
              <p className="pic-info">JPG, GIF or PNG. 1MB max.</p>
            </div>
          </div>
          {/* Name and Email Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm font-medium text-left">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="border border-gray-300 rounded-md p-2 focus:outline-none  name-input"
                placeholder="Enter your name"
              />
            </div>
            {/* Email Section */}
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-medium  text-left">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="border border-gray-300 rounded-md p-2 name-input"
                placeholder="Enter your email"
              />
            </div>
          </div>
          {/* Username Change Section */}
          <div
            className="grid grid-cols-1 
          gap-4 "
          >
            <div className="flex flex-col gap-2">
              <label
                htmlFor="username"
                className="text-sm font-medium text-left"
              >
                Username
              </label>
              <input
                type="text"
                id="username"
                className="border border-gray-300 rounded-md p-2 name-input"
                placeholder="Enter your username"
              />
            </div>

            <button className="w-15 text-gray-800 bg-gray-200 hover:bg-gray-300 common-hover rounded-md transition-colors py-2   save-btn">
              Save
            </button>
          </div>
        </div>
      </div>
      {/* Password Change Section */}

      <div className="grid grid-cols-1 md:grid-cols-10 gap-6 m-2 items-start pb-7 pt-10">
        {/* Section Title */}
        <div className="md:col-span-3 space-y-2 text-left">
          <h2 className="text-xl font-medium">Change Password</h2>
          <p className="text-sm text-gray-500">
            Update your password to keep your account secure.
          </p>
        </div>

        {/* Password Change Form */}
        <div
          className=" grid grid-cols-1 
          gap-4  md:col-span-7"
        >
          <div className="flex flex-col gap-2">
            <label
              htmlFor="current-password"
              className="text-sm font-medium text-left"
            >
              Current Password
            </label>
            <input
              type="password"
              id="current-password"
              className="border border-gray-300 rounded-md p-2 name-input"
              placeholder="Enter your current password"
            />
          </div>
          {/* New Password Section */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="new-password"
              className="text-sm font-medium text-left"
            >
              New Password
            </label>
            <input
              type="password"
              id="new-password"
              className="border border-gray-300 rounded-md p-2 name-input"
              placeholder="Enter your new password"
            />
          </div>

          {/* Confirm New Password Section */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="confirm-new-password"
              className="text-sm font-medium text-left"
            >
              Confirm New Password
            </label>
            <input
              type="password"
              id="confirm-new-password"
              className="border border-gray-300 rounded-md p-2 name-input"
              placeholder="Confirm your new password"
            />
          </div>

          <button className="w-15 px-2  text-gray-800 save-btn  py-1.5 rounded-md transition-colors ">
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
