import { useEffect, useState } from "react";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import StrongPasswordChecker from "../components/signup/password_strength_checker/PasswordStrengthChecker";
import { passwordStrengthController } from "../../src/helpers";
import CheckBox from "../components/CheckBox";
import { SignUpDataType } from "../types";

const SignUPView = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isStrongPassword, setIsStrongPassword] = useState<boolean>(false);
  const [signUpData, setSignUpData] = useState<SignUpDataType>({
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

  useEffect(() => {
    setIsStrongPassword(
      passwordStrengthController(signUpData.password).isStrong
    );

    if (
      signUpData.password === signUpData.confirmPassword &&
      signUpData.password &&
      signUpData.confirmPassword
    ) {
      setIsPasswordMatch(true);
    } else {
      setIsPasswordMatch(false);
    }

    if (!isStrongPassword || !isPasswordMatch || !isChecked) {
      setIsButtonDisabled(true);
    } else {
      setIsButtonDisabled(false);
    }

    if (signUpData.dob) {
      const year = new Date(signUpData.dob).getFullYear();
      const curretYear = new Date().getFullYear();
      const age = curretYear - year;

      age > 18
        ? setIsEligible(true)
        : alert("Your age must be 18 years or greater");
    }
  }, [signUpData, isChecked]);

  // ------------------- [Signup Section] ----------------------------

  const singUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isFormValid()) {
      event.preventDefault();
      if (!isStrongPassword) {
        alert("Please Make sure yous password is strong");
      } else if (!isPasswordMatch) {
        alert("Password don't Match");
      } else if (!isChecked) {
        alert("Please Accept Terms and Conditions to continue");
      } else if (!isEligible) {
        alert("Your age must be 18 years or greater");
      } else {
        console.log(signUpData);
      }
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
        <StrongPasswordChecker
          isPasswordMatch={isPasswordMatch}
          controls={passwordStrengthController(signUpData.password)}
        />
        <CheckBox
          onClick={() => setIsChecked(!isChecked)}
          title="Accept Terms & Coditions"
          className="my-2"
        />
        <BaseButton
          disabled={isButtonDisabled}
          OnClick={singUp}
          title="Create Account"
          className="w-full xs:w-fit font-bold mb-2"
        />

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
