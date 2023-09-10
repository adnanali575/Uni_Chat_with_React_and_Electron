import React from "react";

interface Avatar {
  src: string;
  className?: string;
}

const Avatar: React.FC<Avatar> = ({ src, className }) => {
  return (
    <div
      className={`${className} w-[40px] flex items-center cursor-pointer h-[40px] overflow-hidden rounded-full aspect-square transition-default`}
    >
      <img className="w-full" src={src} />
    </div>
  );
};

export default Avatar;
