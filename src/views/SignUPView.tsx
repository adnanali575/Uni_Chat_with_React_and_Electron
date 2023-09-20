import React, { useEffect, useState } from "react";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import StrongPasswordChecker from "../components/signup/password_strength_checker/PasswordStrengthChecker";
import { passwordStrengthController } from "../../src/helpers";
import CheckBox from "../components/CheckBox";
import { SignUpDataType } from "../types";

import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import {
  setDoc,
  doc,
  db,
  auth,
  createUserWithEmailAndPassword,
} from "../firebase/firebaseConfig";

const SignUPView = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isConfirmPassword, setIsConfirmPassword] = useState<boolean>(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(false);
  const [isEligible, setIsEligible] = useState(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isStrongPassword, setIsStrongPassword] = useState<boolean>(false);
  const [isBUttonLoading, setIsButtonLoading] = useState<boolean>(false);
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
      signUpData.confirmPassword &&
      isPasswordMatch
    );
  };

  // ------------------- [Signup Section] ----------------------------

  const singUp = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isFormValid()) {
      event.preventDefault();
      if (!isEligible) {
        toast.warning("Your age must be 18 years or greater");
      } else {
        setIsButtonLoading(true);

        createUserWithEmailAndPassword(
          auth,
          signUpData.email,
          signUpData.password
        )
          .then(async (userCredential) => {
            setIsButtonLoading(false);
            const user = userCredential.user;
            console.log("User signed up:", user);

            await setDoc(doc(db, "users", user.uid), signUpData);
          })
          .catch((error) => {
            toast.error(error.code);
            setIsButtonLoading(false);
          });
      }
    }
  };

  // ------------------- [ useEffect ] ----------------------------

  useEffect(() => {
    setIsStrongPassword(
      passwordStrengthController(signUpData.password).isPasswordStrong
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

    if (isStrongPassword && isChecked && isFormValid()) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }

    if (signUpData.dob) {
      const year = new Date(signUpData.dob).getFullYear();
      const curretYear = new Date().getFullYear();
      const age = curretYear - year;

      age > 18
        ? setIsEligible(true)
        : toast.warning("Your age must be 18 years or greater");
    }

    const array = [1, 4, 5, 6, 7, 62, 323];

    const newArrA = array.map((ele) => (ele === 4 ? ele + 4 : ele));
    console.log(array);
    console.log(newArrA);
  }, [signUpData, isChecked]);

  return (
    <>
      <div className="min-h-screen py-4 bg-white xs:bg-gray-bg flex justify-center items-center">
        <form className="bg-white w-full xs:w-[500px] my-11 md:my-0 md:w-[700px] px-6 xs:px-8 py-8 rounded shadow-none xs:shadow-lg">
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
            loading={isBUttonLoading}
            disabled={isButtonDisabled}
            OnClick={singUp}
            title="Create Account"
            className="w-full xs:w-fit font-bold mb-2"
          />

          <p className="mt-3 font-bold">
            Already have an account?
            <Link to="/login" className="text-green-1 hover:underline ms-1">
              Login
            </Link>
          </p>
        </form>
      </div>
      <ToastContainer />
    </>
  );
};

export default SignUPView;
