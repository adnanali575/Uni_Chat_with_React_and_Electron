import { useState, useEffect } from "react";
import BaseButton from "../components/BaseButton";
import BaseInput from "../components/BaseInput";
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import {
  auth,
  signInWithEmailAndPassword,
} from "../../src/firebase/firebaseConfig";

const LoginView = () => {
  const [isPassword, setIsPassword] = useState<boolean>(true);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const [isBUttonLoading, setIsButtonLoading] = useState<boolean>(false);
  const [logInData, setLogInData] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleChange = (fieldName: string, value: string) => {
    setLogInData((prevData) => ({ ...prevData, [fieldName]: value }));
  };

  const isFormValid = () => {
    return logInData.email && logInData.password;
  };

  useEffect(() => {
    setIsButtonDisabled(isFormValid() ? false : true);
  }, [logInData]);

  // ------------------- [Login Section] ----------------------------

  const logIn = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (isFormValid()) {
      event.preventDefault();
      setIsButtonLoading(true);

      signInWithEmailAndPassword(auth, logInData.email, logInData.password)
        .then((userCredential) => {
          setIsButtonLoading(false);
          navigate("/");
          console.log("Logged In Successfully", userCredential.user);
        })
        .catch((error) => {
          setIsButtonLoading(false);
          toast.error(error.code);
        });
    }
  };

  useEffect(() => {}, []);

  return (
    <div className="min-h-screen bg-white xs:bg-gray-bg flex justify-center items-center">
      <form className="flex flex-col gap-3 bg-white w-11/12 xs:w-[400px] px-4 xs:px-6 py-8 rounded shadow-none xs:shadow-lg">
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
        <BaseButton
          loading={isBUttonLoading}
          disabled={isButtonDisabled}
          OnClick={logIn}
          title="Login"
          className="w-full font-semibold mb-3"
        />
        <p className="text-text-gray font-bold text-sm">
          Forgot Password?
          <a href="#" className="text-blue hover:underline ms-1">
            Reset Password
          </a>
        </p>

        <p className="font-bold text-text-gray text-sm">
          Don't have an account?
          <Link to="/signup" className="text-blue hover:underline ms-1">
            Create Account
          </Link>
        </p>
      </form>
      <ToastContainer />
    </div>
  );
};

export default LoginView;
