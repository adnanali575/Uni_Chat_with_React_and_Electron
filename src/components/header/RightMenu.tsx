import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Profile from "../Profile";

const RightMenu = () => {
  return (
    <div className="flex items-center gap-3">
      <a
        href="#"
        className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-greenish-gray text-600 hover:bg-light-green hover:text-green active:scale-90 cursor-pointer transition-default"
      >
        <FontAwesomeIcon icon="plus" />
      </a>
      <a
        href="#"
        className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-greenish-gray text-600 hover:bg-light-green hover:text-green active:scale-90 cursor-pointer transition-default"
      >
        <FontAwesomeIcon icon="message" />
      </a>
      <a
        href="#"
        className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-greenish-gray text-600 hover:bg-light-green hover:text-green active:scale-90 cursor-pointer transition-default"
      >
        <FontAwesomeIcon icon="bell" />
      </a>

      <Profile />
    </div>
  );
};

export default RightMenu;
