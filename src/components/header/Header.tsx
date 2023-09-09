import HeaderMenuIcon from "../HeaderMenuIcon";
import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = () => {
  const src = "https://cdn.statusqueen.com/dpimages/thumbnail/cute3-247.jpg";

  return (
    <>
      <div className="w-full h-[57px] fixed top-0 bg-white py-2 flex justify-between items-center px-6 shadow-header">
        <div className="w-[200px] h-full bg-gray-100 text-[#606266] rounded-full flex items-center px-3">
          <FontAwesomeIcon icon="magnifying-glass" className="mr-3" />
          <input
            type="text"
            placeholder="Search Uni Chat"
            className="text-sm bg-gray-100 w-full outline-none"
          />
        </div>
        <div className="flex gap-3">
          <HeaderMenuIcon icon="house" />
          <HeaderMenuIcon icon="user-group" />
          <HeaderMenuIcon icon="video" />
          <HeaderMenuIcon icon="floppy-disk" />
          <HeaderMenuIcon icon="gear" />
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#"
            className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-gray-200 text-600 hover:bg-[#f2f2f2] active:scale-90 active:bg-blue-100 active:text-blue-600 cursor-pointer transition duration-[0.2s] ease-in-out"
          >
            <FontAwesomeIcon icon="plus" />
          </a>
          <a
            href="#"
            className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-gray-200 text-600 hover:bg-[#f2f2f2] active:scale-90 active:bg-blue-100 active:text-blue-600 cursor-pointer transition duration-[0.2s] ease-in-out"
          >
            <FontAwesomeIcon icon="message" />
          </a>
          <a
            href="#"
            className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-gray-200 text-600 hover:bg-[#f2f2f2] active:scale-90 active:bg-blue-100 active:text-blue-600 cursor-pointer transition duration-[0.2s] ease-in-out"
          >
            <FontAwesomeIcon icon="bell" />
          </a>

          <Avatar src={src} className="active:scale-95" />
        </div>
      </div>
    </>
  );
};

export default Header;
