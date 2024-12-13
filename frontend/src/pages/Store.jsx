import React, { useState } from "react";
import NavBar from "../components/NavBar";
import SideBar from "../components/SideBar";
import Collections from "../sections/Collections";
import { Outlet } from "react-router-dom";

const Store = () => {
  const [view, setView] = useState("Home");
  return (
    <div className="bg-white w-full min-h-screen text-[#212121]">
      <NavBar />
      <div className="flex h-screen w-full">
        <SideBar view={view} setView={setView} />
        <div className="mt-20 w-full">
          <Outlet/>
        </div>
      </div>
    </div>
  );
};

export default Store;
