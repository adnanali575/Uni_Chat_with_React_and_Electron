import { useState, useRef, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const closeDropdown = () => {
    setIsOpen(false);
  };

  const handleClickOutside = (e: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(e.target as Node)
    ) {
      closeDropdown();
    }
  };

  const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <div className="xs:hidden fixed w-screen h-screen bg-black opacity-50 inset-0"></div>
      )}
      <div
        onClick={() => setIsOpen(true)}
        ref={dropdownRef}
        className={`${
          isOpen
            ? `shadow-header absolute inset-0  flex-col w-full xs:w-[300px] justify-start h-fit bg-white`
            : `h-fit md:h-[57px] lg:w-[300px] items-center`
        } flex px-4 xs:px-2 py-2  transition-all duration-300`}
      >
        <div className="flex justify-end items-center"></div>
        <div className="text-[#606266] w-full relative gap-3 flex justify-between items-center">
          <FontAwesomeIcon
            icon="magnifying-glass"
            className="absolute cursor-pointer left-3 z-50"
          />
          <input
            type="search"
            placeholder="Search uni chat"
            className={`${
              isOpen
                ? `ps-4 grow`
                : `w-[40px] xs:w-full md:w-[40px] lg:w-full flex placeholder-greenish-gray md:placeholder-greenish-gray xs:placeholder-text-gray lg:placeholder-text-gray items-center justify-center cursor-pointer aspect-auto lg:cursor-auto lg:aspect-square `
            } text-sm ps-9 lg:pe-3 h-[40px] outline-none bg-greenish-gray rounded-full transition-default`}
          />
        </div>
        {isOpen && (
          <div className="flex flex-col justify-between h-[70vh] xs:h-[300px]">
            <p className="text-sm text-gray-500 py-2">Recent</p>

            {/* ------------------------------------------------------------------------------------- */}
            <div className="bg-white grow overflow-x-hidden overflow-y-auto">
              {arr.map((e) => (
                <div
                  key={e}
                  className="flex items-center justify-between hover:bg-greenish-gray cursor-pointer p-2 rounded-md"
                >
                  <div className="flex w-[40px] h-[40px] rounded-full aspect-square overflow-hidden">
                    <img
                      className="w-full"
                      src="https://i.pinimg.com/564x/b1/04/44/b10444b33c057da635bb221987230355.jpg"
                    />
                  </div>
                  <div className="grow px-3">
                    <p className="text-sm font-bold">Uni chat user</p>
                    <p className="text-xs text-gray-500">12 june 2023</p>
                  </div>
                  <span className="w-[25px] h-[25px] hover:bg-light-green hover:text-green active:bg-greenish-gray text-[15px] flex items-center justify-center cursor-pointer transition-default rounded-full">
                    <FontAwesomeIcon icon="close" />
                  </span>
                </div>
              ))}
            </div>
            <hr className="text-gray mb-2" />
            <p className="text-center flex flex-col text-sm text-green p-2 bg-white hover:bg-light-green rounded-md cursor-pointer transition-default">
              View all Recents
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export default SearchBox;
