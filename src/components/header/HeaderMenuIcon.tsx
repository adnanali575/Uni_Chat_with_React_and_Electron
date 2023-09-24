import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useNavigate, useLocation } from "react-router-dom";

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
  const [isActive, setIsActive] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigate = () => {
    if (path) navigate(path);
  };

  useEffect(() => {
    location.pathname === path ? setIsActive(true) : setIsActive(false);
  }, [location]);

  return (
    <>
      <div
        title={title}
        className={`${className} ${
          isActive
            ? `border-b-[3px] border-blue text-blue`
            : `border-opacity-0 hover:border-opacity-100 border-blue text-text-gray`
        }  border-b-[3px]  transition-default flex items-center w-fit`}
      >
        <span
          onClick={handleNavigate}
          className={`py-1 px-3 xs:py-2 xs:px-5 lg:px-7 text-2xl  hover:bg-blue hover:bg-opacity-10 active:scale-90 active:text-blue rounded-md cursor-pointer transition-default`}
        >
          <FontAwesomeIcon icon={icon} />
        </span>
      </div>
    </>
  );
};

export default HeaderMenuIcon;
