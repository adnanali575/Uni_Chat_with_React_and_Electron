import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface SidebarIcons {
  icon: IconProp;
  path?: string;
  className?: string;
  label?: string;
}

const SidebarIcons: React.FC<SidebarIcons> = ({
  icon,
  path,
  label,
  className,
}) => {
  return (
    <a
      href={path}
      className={`${className} w-full h-[50px] flex items-center hover-gray text-text-gray justify-between rounded-md overflow-hidden`}
    >
      <FontAwesomeIcon icon={icon} className="px-3 text-2xl" />
      <label className="grow text-xl cursor-pointer">{label}</label>
    </a>
  );
};

export default SidebarIcons;
