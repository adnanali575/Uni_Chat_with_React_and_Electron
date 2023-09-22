import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import HeaderMenuIcon from "../header/HeaderMenuIcon";
import SidebarIcons from "./SidebarIcons";
import { auth, signOut } from "../../../src/firebase/firebaseConfig";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate, useLocation } from "react-router-dom";

const SideBarMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const logout = () => {
    signOut(auth)
      .then(() => {
        navigate("/login");
        console.log("Signout Successfully");
      })
      .catch((error) => {
        toast.error(error.code);
      });
  };

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

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
            <SidebarIcons path="/settings" icon="gear" label="Settings" />
            <SidebarIcons path="/login" icon="user" label="Profile Setting" />
            <SidebarIcons path="/signup" icon="floppy-disk" label="Saved" />
            <SidebarIcons path="/" icon="palette" label="Display Settings" />
            <button onClick={logout} className="text-start">
              <SidebarIcons
                icon="right-from-bracket"
                label="Logout"
                className="text-red hover:text-red"
              />
            </button>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default SideBarMenu;
