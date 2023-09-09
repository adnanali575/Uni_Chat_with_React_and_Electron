import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBox = () => {
  return (
    <>
      <div className="flex items-center h-full">
        <img src="../../assets/images/Uni_Chat_logo.png" className="w-[40px]" />
        <div className="text-[#606266] h-full relative flex items-center">
          <FontAwesomeIcon
            icon="magnifying-glass"
            className="absolute left-3 z-50"
          />
          <input
            type="search"
            placeholder="Search Uni Chat"
            className="text-sm outline-none ps-9 pe-3 focus:scale-105 bg-gray-100 w-[200px] h-full rounded-full  px-3outline-none transition-all duration-200"
          />
        </div>
      </div>
    </>
  );
};

export default SearchBox;
