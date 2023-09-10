import Profile from "../Profile";
import SideBarMenu from "../SideBarMenu";
import HeaderMenuIcon from "./HeaderMenuIcon";
import RightMenu from "./RightMenu";

import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <div className="w-full h-fit md:h-[57px] fixed top-0 bg-white py-2 flex flex-col md:flex-row md:justify-between md:items-center px-6 shadow-header">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1 pe-3 w-fit lg:w-[288px]">
            <h1 className="w-[40px] h-[40px] rounded-full aspect-square bg-green text-white flex justify-center items-center text-xs">
              Logo
            </h1>
            <SearchBox />
          </div>
          <div>
            <Profile />
          </div>
        </div>

        <div className="flex justify-between gap-3 mt-2 md:mt-0 md:me-3">
          <HeaderMenuIcon icon="house" />
          <HeaderMenuIcon icon="user-group" />
          <HeaderMenuIcon icon="video" />
          <HeaderMenuIcon icon="floppy-disk" className="hidden md:block" />
          <HeaderMenuIcon icon="gear" />
          <SideBarMenu />
        </div>
        <div className="hidden md:block">
          <RightMenu />
        </div>
      </div>
    </>
  );
};

export default Header;
