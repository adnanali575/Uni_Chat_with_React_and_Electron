import React from "react";

interface ButtonProps {
  title: string;
  styles?: string;
  className?: string;
  OnClick?: (evet: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  loading?: boolean;
}

const BaseButton: React.FC<ButtonProps> = ({
  title,
  className,
  OnClick,
  disabled,
  loading,
}) => {
  return (
    <button
      disabled={disabled}
      onClick={OnClick}
      className={`${className} ${
        disabled
          ? `bg-gray-1 text-text-gray cursor-not-allowed`
          : `bg-gradient-to-r from-blue-1 to-blue hover:from-[#1976D2] hover:to-[#01579b]`
      } ${loading ? `animate-pulse duration-100` : ``}
       transform text-white px-8 py-3 rounded-md shadow-md active:scale-95`}
    >
      <p>{title}</p>
    </button>
  );
};

export default BaseButton;
