import React, { useState } from "react";

interface CheckBox {
  onClick?: () => void;
  className?: string;
  title?: string;
}

const CheckBox: React.FC<CheckBox> = ({ onClick, title }) => {
  const [isClicked, setIsClicked] = useState(true);

  return (
    <div onClick={onClick} className="w-fit">
      <div
        onClick={() => setIsClicked(!isClicked)}
        className="flex items-center gap-2 pb-2"
      >
        <input type="checkbox" id="checkbox" className="cursor-pointer" />
        <label
          htmlFor="checkbox"
          className="text-sm text-text-gray cursor-pointer"
        >
          {title}
        </label>
      </div>
    </div>
  );
};

export default CheckBox;
