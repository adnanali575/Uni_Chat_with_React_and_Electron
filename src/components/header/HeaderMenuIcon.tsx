import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useNavigate } from "react-router-dom";

interface iconProps {
  icon: IconProp;
  path?: string;
  className?: string;
  title?: string;
}

const HeaderMenuIcon: React.FC<iconProps> = ({
  icon,
  path,
  className,
  title,
}) => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path) navigate(path);
  };

  return (
    <>
      <div title={title} className={`${className} flex items-center w-fit`}>
        <span
          onClick={handleNavigate}
          className={` py-1 px-3 xs:py-2 xs:px-5 lg:px-7 text-2xl text-[#606266] hover:bg-greenish-gray active:scale-90 active:bg-light-green active:text-green rounded-md cursor-pointer transition-default`}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </>
  );
};

export default HeaderMenuIcon;
