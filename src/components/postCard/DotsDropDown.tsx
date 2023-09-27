import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const DotsDropDown: React.FC = () => {
  const listItems = [
    { title: "Book Mark", icon: "bookmark" },
    { title: "Edit Post", icon: "pencil" },
    { title: "Copy Link", icon: "link" },
    { title: "Delete post", icon: "trash" },
    { title: "Hide Post", icon: "eye-slash" },
  ];

  const dropdownContent = (
    <ul
      className={`translate-down-animation py-3 rounded-md absolute shadow-md bg-white w-[200px] right-[2px] top-[-39px]`}
    >
      {listItems.map((item, i) => (
        <li
          key={i}
          className={` py-2 px-4 hover:bg-blue hover:bg-opacity-10 hover:text-blue active:bg-none cursor-pointer transition-default`}
        >
          <FontAwesomeIcon icon={item.icon as IconProp} className="mr-3" />
          {item.title}
        </li>
      ))}
    </ul>
  );

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = () => {
    if (dropdownRef.current) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  return (
    <div className="relative">
      <div
        onClick={toggleDropdown}
        className={`active:text-blue hover:bg-gray-bg cursor-pointer w-[30px] h-[30px] flex items-center justify-center rounded-full aspect-square`}
      >
        <FontAwesomeIcon icon="ellipsis-vertical" className="text-lg" />
      </div>
      {isDropdownOpen && (
        <div
          className="absolute mt-2 py-2 bg-white border rounded shadow-md"
          ref={dropdownRef}
        >
          {dropdownContent}
        </div>
      )}
    </div>
  );
};

export default DotsDropDown;
