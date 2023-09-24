import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

interface MenuIcons {
  icon: IconProp;
  path?: string;
  onClick?: () => void;
  className?: string;
}

const RightMenuIcons: React.FC<MenuIcons> = ({
  icon,
  path,
  onClick,
  className,
}) => {
  return (
    <a
      onClick={onClick}
      href={path}
      className={`${className} text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-gray-bg text-600 hover:bg-blue hover:bg-opacity-10 hover:text-blue active:scale-90 cursor-pointer transition-default`}
    >
      <FontAwesomeIcon icon={icon} />
    </a>
  );
};

export default RightMenuIcons;
