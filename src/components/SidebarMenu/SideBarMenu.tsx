import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import HeaderMenuIcon from "../header/HeaderMenuIcon";
import SidebarIcons from "./SidebarIcons";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div>
        <button onClick={() => setIsOpen(true)}>
          <HeaderMenuIcon icon="bars" className="block md:hidden" />
        </button>
        <div
          className={`${
            isOpen ? `translate-x-[0%]` : `translate-x-[-100%]`
          } fixed py-3 px-5 inset-0 z-50 w-screen h-screen bg-white transition-all duration-300`}
        >
          <div className="flex justify-end items-center">
            <button
              onClick={() => setIsOpen(false)}
              className="w-[40px] h-[40px] flex justify-center items-center overflow-hidden rounded-full aspect-square hover-green"
            >
              <FontAwesomeIcon
                icon="close"
                className="text-2xl p-3 hover:text-green text-text-gray"
              />
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <SidebarIcons icon="gear" label="Settings" />
            <SidebarIcons icon="user" label="Profile Setting" />
            <SidebarIcons icon="floppy-disk" label="Saved" />
            <SidebarIcons icon="palette" label="Display Settings" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBarMenu;
