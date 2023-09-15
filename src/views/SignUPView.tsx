import { useState } from "react";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";

const SignUPView = () => {
  const [isPassword, setIsPassword] = useState(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState(true);
  const [signUpData, setSignUpData] = useState({
    name: "",
    dob: "",
    phone: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (fieldName: string, newValue: string) => {
    setSignUpData((prevData) => ({
      ...prevData,
      [fieldName]: newValue,
    }));
  };

  const isFormValid = () => {
    return (
      signUpData.name &&
      signUpData.dob &&
      signUpData.phone &&
      signUpData.email &&
      signUpData.password &&
      signUpData.confirmPassword
    );
  };

  const singUp = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isFormValid()) {
      event.preventDefault();
      console.log(signUpData);
    }
  };

  return (
    <div className="min-h-screen bg-white xs:bg-gray flex justify-center items-center">
      <form className="bg-white w-full xs:w-[500px] my-11 md:my-0 md:w-[700px] px-6 xs:px-8 py-8 rounded shadow-none xs:shadow-md">
        <h1 className="font-extrabold text-2xl text-center mb-4">Register</h1>
        <div className="flex flex-col md:grid grid-cols-2 gap-6">
          <BaseInput
            value={signUpData.name}
            onChange={(value) => handleInputChange("name", value)}
            required={true}
            placeholder="Full Name"
            label={true}
            name="name"
          />
          <BaseInput
            value={signUpData.dob}
            onChange={(value) => handleInputChange("dob", value)}
            required={true}
            type="date"
            placeholder="Date of Birth"
            label={true}
          />
          <BaseInput
            value={signUpData.phone}
            onChange={(value) => handleInputChange("phone", value)}
            required={true}
            placeholder="Phone Number"
            label={true}
            type="number"
            name="phone"
          />
          <BaseInput
            value={signUpData.email}
            onChange={(value) => handleInputChange("email", value)}
            required={true}
            placeholder="Email Address"
            label={true}
            type="email"
            name="email"
          />
          <BaseInput
            value={signUpData.password}
            onChange={(value) => handleInputChange("password", value)}
            required={true}
            placeholder="Password"
            label={true}
            type={isPassword ? "password" : "text"}
            password={true}
            toggleType={() => setIsPassword(!isPassword)}
            isPassword={isPassword}
          />
          <BaseInput
            value={signUpData.confirmPassword}
            onChange={(value) => handleInputChange("confirmPassword", value)}
            required={true}
            placeholder="Confirm Password"
            label={true}
            type={isConfirmPassword ? "password" : "text"}
            password={true}
            toggleType={() => setIsConfirmPassword(!isConfirmPassword)}
            isPassword={isConfirmPassword}
          />
        </div>
        <div onClick={singUp}>
          <BaseButton
            title="Create Account"
            className="w-full xs:w-fit font-bold mt-5 mb-2"
          />
        </div>

        <p className="mt-3 font-bold">
          Already have an account?
          <a href="#" className="text-blue-primary underline ms-1">
            Login
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUPView;
