import React from "react";

export default function Navbar() {
  return (
    <div className="fixed top-0 left-90 flex flex-row justify-between w-full">
      <input
        type="search"
        name="search"
        id="search"
        placeholder="search"
        className="text-black"
      />
      <button>Theme</button>
    </div>
  );
}
