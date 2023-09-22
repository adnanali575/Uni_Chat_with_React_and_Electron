import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path) navigate(path);
  };

  return (
    <span
      onClick={handleNavigate}
      className={`${className} w-full h-[50px] flex items-center hover-gray text-text-gray justify-between rounded-md overflow-hidden`}
    >
      <FontAwesomeIcon icon={icon} className="px-3 text-2xl" />
      <label className="grow text-xl cursor-pointer">{label}</label>
    </span>
  );
};

export default SidebarIcons;
