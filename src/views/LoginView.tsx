import { useState } from "react";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";

const LoginView = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [logInData, setLogInData] = useState({ email: "", password: "" });

  const handleChange = (fieldName: string, value: string) => {
    setLogInData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const isFormValid = () => {
    return logInData.email && logInData.password;
  };

  const logIn = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isFormValid()) {
      event.preventDefault();
      console.log(logInData);
    }
  };

  return (
    <div className="min-h-screen bg-white xs:bg-gray flex justify-center items-center">
      <form className="flex flex-col gap-3 bg-white w-11/12 xs:w-[400px] px-4 xs:px-6 py-8 rounded shadow-none xs:shadow-md">
        <h1 className="font-extrabold text-2xl text-center mb-4">
          Log in Here
        </h1>
        <BaseInput
          onChange={(value) => handleChange("email", value)}
          required={true}
          placeholder="Email Adress"
          label={true}
          type="email"
          name="email"
        />
        <BaseInput
          value={logInData.password}
          onChange={(value) => handleChange("password", value)}
          required={true}
          placeholder="Password"
          name="password"
          label={true}
          type={isPassword ? `password` : `text`}
          password={true}
          toggleType={() => setIsPassword(!isPassword)}
          isPassword={isPassword}
        />
        <div onClick={logIn}>
          <BaseButton title="Login" styles="w-full py-3 mt-3" />
        </div>

        <p className="font-bold">
          Don't have an account?
          <a href="#" className="text-blue-primary underline ms-1">
            Sing Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginView;
