import React, { ReactNode } from "react";

interface SlidUpWindowProps {
  content?: ReactNode;
  isShow?: boolean;
  setIsShow?: () => void;
}

const SlidUpWindow: React.FC<SlidUpWindowProps> = ({
  content,
  isShow,
  setIsShow,
}) => {
  return (
    <div className="z-50">
      <div
        onClick={setIsShow}
        className={`${
          isShow
            ? `translate-y-[0%] opacity-10`
            : `translate-y-[100%] opacity-0`
        } w-screen h-screen fixed inset-0 bg-black transition-opacity duration-400`}
      ></div>
      <div
        className={`${
          isShow ? `translate-y-[0%]` : `translate-y-[100%]`
      } w-full sm:w-[95vh] lg:w-[702px] h-[80vh] md:h-[90vh] rounded-tl-[20px] md:rounded-tl-2xl rounded-tr-[30px] md:rounded-tr-2xl bg-white shadow-md transition-all duration-200 fixed left-[50%] translate-x-[-50%] bottom-0 overflow-hidden`}
      >
        <div className="h-full w-full">{content}</div>
      </div>
    </div>
  );
};

export default SlidUpWindow;
