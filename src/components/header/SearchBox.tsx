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

  useEffect(() => {
    window.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        ref={dropdownRef}
        className={`${
          isOpen
            ? `shadow-header absolute inset-0 py-2 flex-col w-full xs:w-[300px] justify-start  h-[300px] bg-white`
            : `h-fit md:h-[57px] md:py-2 lg:w-[300px] items-center`
        } flex px-4  transition-all duration-300`}
      >
        <div className="flex justify-end items-center"></div>
        <div className="text-[#606266] w-full relative gap-3 flex justify-between items-center">
          {isOpen ? (
            <button className="w-[40px] h-[40px] flex justify-center items-center overflow-hidden rounded-full aspect-square hover-green">
              <FontAwesomeIcon
                icon="arrow-left"
                className="text-2xl p-3 hover:text-green text-text-gray"
              />
            </button>
          ) : (
            <FontAwesomeIcon
              icon="magnifying-glass"
              className="absolute cursor-pointer left-3 z-50"
            />
          )}
          <input
            type="search"
            placeholder="Search uni chat"
            className={`${
              isOpen
                ? `ps-4 grow`
                : `flex placeholder-greenish-gray lg:placeholder-text-gray items-center justify-center cursor-pointer aspect-auto w-[40px]   lg:cursor-auto lg:aspect-square lg:ps-9 lg:w-full`
            } text-sm lg:pe-3 h-[40px] outline-none bg-greenish-gray rounded-full transition-default`}
          />
        </div>
        {isOpen && (
          <>
            <p className="text-sm grow text-gray-500 py-2">Recent</p>
            <div className="flex flex-col justify-between h-full">
              <div>
                <div className="flex items-center justify-between hover:bg-greenish-gray cursor-pointer p-2 rounded-md">
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
                <div className="flex items-center justify-between hover:bg-greenish-gray cursor-pointer p-2 rounded-md">
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
              </div>
              <p className="text-center text-sm text-green p-2 hover:bg-light-green rounded-md cursor-pointer transition-default">
                View all Recents
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default SearchBox;
