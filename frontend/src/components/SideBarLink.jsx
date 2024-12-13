import React from "react";
import { Link } from "react-router-dom";

const SideBarLink = ({
  children,
  label,
  link,
  currentSection,
  setCurrentSection,
  subItems = [],
  subSection,
  setSubSection,
}) => {
  const handleSectionClick = () => {
    // Set the current section and clear the previously selected sub-section
    if (currentSection !== label) {
      setSubSection(null); // Reset the selected sub-item
    }
    setCurrentSection(label); // Set the new current section
  };

  return (
    <div>
      {/* Main Section */}
      <Link
        to={link}
        onClick={handleSectionClick}
        className={`${
          currentSection === label ? `bg-slate-200` : `hover:bg-slate-100`
        } flex gap-3 text-md font-semibold items-center cursor-pointer px-4 py-2 rounded transition-colors mt-1`}
      >
        {children}
        {label}
      </Link>

      {/* Render SubItems */}
      {/* Render SubItems */}
      {currentSection === label && subItems.length > 0 && (
        <ul className="space-y-1 flex flex-col">
          {subItems.map((subItem, index) => (
            <Link
              to={subItem.link} // Use 'to' instead of 'href'
              key={index}
              onClick={() => setSubSection(subItem.name)} // Update sub-section state
              className={`relative ${
                subSection === subItem.name
                  ? `text-black before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] before:bg-[#21212168]`
                  : `text-gray-400`
              } hover:bg-slate-100 cursor-pointer text-sm font-semibold items-center py-2 ps-12 px-5 rounded transition-colors mt-1`}
            >
              {subItem.name}
            </Link>
          ))}
        </ul>
      )}
    </div>
  );
};

export default SideBarLink;
