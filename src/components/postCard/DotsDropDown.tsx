import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState, useEffect, useRef } from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

const DotsDropDown: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dotsRef = useRef<HTMLDivElement | null>(null);

  const listItems = [
    { title: "Book Mark", icon: "bookmark" },
    { title: "Delete post", icon: "trash" },
    { title: "Edit Post", icon: "pencil" },
    { title: "Copy Link", icon: "link" },
    { title: "Hide Post", icon: "eye-slash" },
  ];

  const handleListItemClick = () => {
    setIsDropdownOpen(false);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleOutsideClick = (e: MouseEvent) => {
    if (
      isDropdownOpen &&
      dropdownRef.current &&
      dotsRef.current &&
      !dropdownRef.current.contains(e.target as Node) &&
      !dotsRef.current.contains(e.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [isDropdownOpen]);

  const dropdownContent = (
    <ul
      className={`translate-down-animation py-3 rounded-md absolute shadow-md bg-white w-[200px] right-[2px] top-[-39px]`}
    >
      {listItems.map((item, i) => (
        <li
          onClick={handleListItemClick}
          key={i}
          className={`py-2 px-4 hover:bg-blue hover:bg-opacity-10 hover:text-blue active:scale-95 cursor-pointer transition-default`}
        >
          <FontAwesomeIcon icon={item.icon as IconProp} className="mr-3" />
          {item.title}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="relative">
      <div
        ref={dotsRef}
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
