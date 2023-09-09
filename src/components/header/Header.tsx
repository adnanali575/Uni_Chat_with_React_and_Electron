import HeaderMenuIcon from "./HeaderMenuIcon";
import RightMenu from "./RightMenu";

import SearchBox from "./SearchBox";

const Header = () => {
  return (
    <>
      <div className="w-full h-[57px] fixed top-0 bg-white py-2 flex justify-between items-center px-6 shadow-header">
        <SearchBox />
        <div className="flex gap-3">
          <HeaderMenuIcon icon="house" />
          <HeaderMenuIcon icon="user-group" />
          <HeaderMenuIcon icon="video" />
          <HeaderMenuIcon icon="floppy-disk" />
          <HeaderMenuIcon icon="gear" />
        </div>
        <RightMenu />
      </div>
    </>
  );
};

export default Header;
