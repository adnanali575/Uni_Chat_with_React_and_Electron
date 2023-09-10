import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Messenger = () => {
  return (
    <div>
      <a
        href="#"
        className="text-base rounded-full aspect-square flex items-center justify-center w-[40px] h-[40px] bg-greenish-gray text-600 hover:bg-light-green hover:text-green active:scale-90 cursor-pointer transition-default"
      >
        <FontAwesomeIcon icon="plus" />
      </a>
    </div>
  );
};

export default Messenger;
