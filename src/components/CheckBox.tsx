import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

interface CheckBox {
  onClick?: () => void;
  className?: string;
  title?: string;
}

const CheckBox: React.FC<CheckBox> = ({ className, onClick, title }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div onClick={onClick}>
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="flex items-center gap-2"
      >
        <div
          id="checkbox"
          className={`${className} ${
            !isClicked ? `bg-green-1` : ``
          } w-4 h-4 border border-gray-1 cursor-pointer flex items-center justify-center transition-default rounded-[3px]`}
        >
          <FontAwesomeIcon
            icon="check"
            className={`${
              !isClicked ? `block` : `hidden`
            } text-[12px] text-white`}
          />
        </div>
        <label htmlFor="checkbox" className="text-sm text-text-gray">
          {title}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
