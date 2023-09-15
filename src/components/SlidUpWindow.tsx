import { useState } from "react";
import RightMenuIcons from "./header/RightMenuIcons";

const SlidUpWindow = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="z-50">
      <RightMenuIcons onClick={() => setIsOpen(true)} icon="plus" />

      <div
        onClick={() => setIsOpen(false)}
        className={`${
          isOpen
            ? `translate-y-[0%] opacity-10`
            : `translate-y-[100%] opacity-0`
        } w-screen h-screen fixed inset-0 bg-black transition-opacity duration-300`}
      ></div>
      <div
        className={`${
          isOpen ? `translate-y-[0%]` : `translate-y-[100%]`
        } p-6 w-full sm:w-[95vh] lg:w-[800px] h-[80vh] md:h-[90vh] rounded-tl-2xl rounded-tr-2xl bg-white shadow-md transition-all duration-200 fixed left-[50%] translate-x-[-50%] bottom-0`}
      >
        Heading
      </div>
    </div>
  );
};

export default SlidUpWindow;
