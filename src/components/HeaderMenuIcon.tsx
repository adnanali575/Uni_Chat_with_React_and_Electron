import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface iconProps {
  icon: IconProp;
}

const HeaderMenuIcon: React.FC<iconProps> = ({ icon }) => {
  return (
    <>
      <a
        href="#"
        className="text-2xl text-[#606266] hover:bg-[#f2f2f2] active:scale-90 px-7 active:bg-blue-100 active:text-blue-600 py-2 rounded-md cursor-pointer transition duration-[0.2s] ease-in-out"
      >
        <FontAwesomeIcon icon={icon} />
      </a>
    </>
  );
};

export default HeaderMenuIcon;
