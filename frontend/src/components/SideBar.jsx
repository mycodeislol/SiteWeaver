import React, { useState } from "react";
import SideBarLink from "./SideBarLink";
import { House, Package, Truck } from "lucide-react";

const SideBar = () => {
    const [currentSection, setCurrentSection] = useState('Home');
    const [subSection, setSubSection] = useState(null);
  return (
    <div className="h-screen p-2 border shadow-2xl fixed top-0 left-0 pt-24 min-w-[200px]">
      <SideBarLink label="Home" currentSection={currentSection} setCurrentSection={setCurrentSection} subItems={['Themes']} subSection={subSection} setSubSection={setSubSection}>
        <House className=" min-w-5 w-5"/>
      </SideBarLink>
      <SideBarLink label="Orders" currentSection={currentSection} setCurrentSection={setCurrentSection} subSection={subSection} setSubSection={setSubSection}>
        <Truck className=" min-w-5 w-5"/>
      </SideBarLink>
      <SideBarLink label="Products" currentSection={currentSection} setCurrentSection={setCurrentSection} subSection={subSection} setSubSection={setSubSection} subItems={['Collections', 'Tags']}>
        <Package className=" min-w-5 w-5"/>
      </SideBarLink>
    </div>
  );
};

export default SideBar;
