import React, { useRef, ReactNode, useEffect } from "react";

interface DropdownProps {
  isDropdownOpen?: boolean;
  toggleDropdown: () => void;
  content?: ReactNode;
}

const DynamicDropDown: React.FC<DropdownProps> = ({
  isDropdownOpen,
  toggleDropdown,
  content,
}) => {
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        toggleDropdown();
      }
    };

    if (isDropdownOpen) {
      window.addEventListener("mousedown", handleClickOutside);
    } else {
      window.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isDropdownOpen, toggleDropdown]);

  return (
    <div
      className={`absolute w-[350px] shadow-md rounded-md p-9 bg-white top-[55px] right-0 ${
        isDropdownOpen ? "block" : "hidden"
      }`}
      ref={dropdownRef}
    >
      {content}
    </div>
  );
};

export default DynamicDropDown;
