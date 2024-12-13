import React from "react";
import Button from "./Button";

const NavBar = () => {
  return (
    <nav className="px-6 py-4 shadow-lg fixed top-0 right-0 w-full bg-white z-10">
      <div className="max-container flex justify-between items-center">
        {/* logo */}
        <a href="/" className="flex items-center gap-2">
          <img src="./src/assets/logo.png" alt="" className="w-8" />
          <p className="font-outfit text-xl">Site Weaver</p>
        </a>

        {/* profile */}
        <div className="flex gap-1">
          <Button name="Login" mode='light' />
          <Button name="Sign Up" mode='dark'/>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
