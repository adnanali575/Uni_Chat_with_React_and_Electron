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
          : `text-white bg-green-1 hover:bg-green active:bg-green-1`
      }
      font-bold  text-base
  transition-default bg-blue-primary  px-5 py-2 rounded-md`}
    >
      <p className={loading ? `animate-pulse duration-100` : ``}>{title}</p>
    </button>
  );
};

export default BaseButton;
