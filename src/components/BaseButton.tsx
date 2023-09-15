import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  className?: string;
  OnClick?: () => void;
}

const BaseButton: React.FC<ButtonProps> = ({ title, className, OnClick }) => {
  return (
    <button
      onClick={OnClick}
      className={`${className}
      font-bold text-white hover:bg-green active:bg-green-1 text-base
  transition-default bg-blue-primary bg-green-1 px-5 py-2 rounded-md`}
    >
      {title}
    </button>
  );
};

export default BaseButton;
