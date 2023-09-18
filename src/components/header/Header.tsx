import { useState } from "react";
import Profile from "../Profile";
import SideBarMenu from "../SidebarMenu/SideBarMenu";
import SlidUpWindow from "../SlidUpWindow";
import HeaderMenuIcon from "./HeaderMenuIcon";
import PostWindow from "./PostWindow";
import RightMenuIcons from "./RightMenuIcons";
import SearchBox from "./SearchBox";
import DynamicDropDown from "../DynamicDropDown";
import MessengerDropDown from "../Messenger/MessengerDropDown";
import NotificationsDropdown from "../NotificationsDropdown";
import logo from "../../../src/assets/images/Uni_Chat_logo.png";

const Header = () => {
  const [isSlideDownOpen, setIsSlideDownOpen] = useState(false);
  const [isMessengerDropdown, setIsMessengerDropdown] = useState(false);
  const [isNotificationsDropdown, setIsNotificationsDropdown] = useState(false);

  const toggleMessengerDropdown = () => {
    setIsMessengerDropdown(!isMessengerDropdown);
  };

  const toggleNotificatinsDrodown = () => {
    setIsNotificationsDropdown(!isNotificationsDropdown);
  };

  return (
    <>
      <div className="w-full h-fit md:h-[57px] z-10 fixed top-0 bg-white flex flex-col md:flex-row md:justify-between md:items-center px-6 shadow-header">
        <div className="flex justify-between items-center px-0 xs:px-4 md:px-0">
          <div className="flex items-center gap-1 pe-3 w-fit lg:w-[288px]">
            <div className="w-[40px] h-[40px] aspect-square">
              <img src={logo} />
            </div>
            <SearchBox />
          </div>
          <div className="flex py-2 gap-3 md:hidden">
            <SlidUpWindow
              isShow={isSlideDownOpen}
              setIsShow={() => setIsSlideDownOpen(!isSlideDownOpen)}
              content={<PostWindow />}
            />
            <RightMenuIcons
              onClick={() => setIsSlideDownOpen(true)}
              icon="plus"
            />
            <RightMenuIcons icon="message" />
            <Profile />
          </div>
        </div>

        <div className="flex justify-between gap-3 mt-2 md:mt-0 md:me-3">
          <HeaderMenuIcon path="/" icon="house" title="Home" />
          <HeaderMenuIcon
            path="/login"
            icon="user-group"
            title="Friend Requests"
          />
          <HeaderMenuIcon path="/signup" icon="video" title="Videos" />
          <HeaderMenuIcon
            icon="bell"
            className="block md:hidden"
            title="Notifications"
          />
          <HeaderMenuIcon
            icon="bookmark"
            className="hidden md:flex"
            title="Bookmarks"
          />
          <HeaderMenuIcon
            icon="gear"
            className="hidden md:flex"
            title="Settings"
          />

          <SideBarMenu />
        </div>
        <div className="hidden md:flex">
          <div className="flex items-center gap-3">
            <SlidUpWindow
              isShow={isSlideDownOpen}
              setIsShow={() => setIsSlideDownOpen(!isSlideDownOpen)}
              content={<PostWindow />}
            />
            <RightMenuIcons
              onClick={() => setIsSlideDownOpen(true)}
              icon="plus"
            />
            <div className="relative">
              <RightMenuIcons
                onClick={toggleMessengerDropdown}
                icon="message"
              />
              <DynamicDropDown
                content={<MessengerDropDown />}
                isDropdownOpen={isMessengerDropdown}
                toggleDropdown={toggleMessengerDropdown}
              />
            </div>
            <div className="relative">
              <RightMenuIcons onClick={toggleNotificatinsDrodown} icon="bell" />
              <DynamicDropDown
                content={<NotificationsDropdown />}
                isDropdownOpen={isNotificationsDropdown}
                toggleDropdown={toggleNotificatinsDrodown}
              />
            </div>
            <Profile />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
