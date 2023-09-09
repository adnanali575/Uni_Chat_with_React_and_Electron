import Avatar from "../Avatar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const RightMenu = () => {
  const src = "https://cdn.statusqueen.com/dpimages/thumbnail/cute3-247.jpg";

  return (
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
  );
};

export default RightMenu;
