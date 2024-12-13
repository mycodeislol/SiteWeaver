import React, { useState } from "react";
import SideBarLink from "./SideBarLink";
import { House, Package, Truck } from "lucide-react";

const SideBar = () => {
    const [currentSection, setCurrentSection] = useState('Home');
    const [subSection, setSubSection] = useState(null);
  return (
    <div className="h-screen p-2 border shadow-2xl pt-24 w-[200px]">
      <SideBarLink label="Home" link='' currentSection={currentSection} setCurrentSection={setCurrentSection} subItems={[{name: 'Themes', link: "themes"}]} subSection={subSection} setSubSection={setSubSection}>
        <House className=" min-w-5 w-5"/>
      </SideBarLink>
      <SideBarLink label="Orders" link='orders' currentSection={currentSection} setCurrentSection={setCurrentSection} subSection={subSection} setSubSection={setSubSection}>
        <Truck className=" min-w-5 w-5"/>
      </SideBarLink>
      <SideBarLink label="Products" link='products' currentSection={currentSection} setCurrentSection={setCurrentSection} subSection={subSection} setSubSection={setSubSection} subItems={[{name: 'Collections', link: 'collections'}, {name: 'Tags', link: 'tags'}]}>
        <Package className=" min-w-5 w-5"/>
      </SideBarLink>
    </div>
  );
};

export default SideBar;
