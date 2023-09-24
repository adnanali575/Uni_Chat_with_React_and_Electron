import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputType {
  placeholder?: string;
  type?: string;
  className?: string;
  name?: string;
  required?: boolean;
  label?: boolean;
  isPassword?: boolean;
  toggleType?: () => void;
  password?: boolean;
  value?: any;
  onChange: (newValue: any) => void;
}

const BaseInput: React.FC<InputType> = ({
  placeholder,
  type,
  className,
  name,
  label,
  required,
  toggleType,
  password,
  value,
  onChange,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="w-full">
      {label && <label className="font-bold">{placeholder}</label>}
      <div className="flex items-center relative">
        <input
          value={value}
          onChange={handleChange}
          placeholder={placeholder}
          className={`${className} ${
            password ? `pe-10` : ``
          } border border-gray w-full p-3 outline-none rounded focus:border-blue transition-default text-md`}
          type={type?.length ? type : "text"}
          autoComplete={name}
          name={name}
          required={required}
        />
        <FontAwesomeIcon
          onClick={toggleType}
          icon={type === `password` ? `eye` : `eye-slash`}
          className={`${
            password ? `block` : `hidden`
          } absolute right-3 cursor-pointer text-text-gray active:scale-95`}
        />
      </div>
    </div>
  );
};

export default BaseInput;
