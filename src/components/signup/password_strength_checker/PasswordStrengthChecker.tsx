import { passwordStrengthControllerType } from "../../../types";
import StrengthSteps from "./StrengthSteps";

interface StrongPasswordCheckerProps {
  controls: passwordStrengthControllerType;
  isPasswordMatch?: boolean;
}

const StrongPasswordChecker: React.FC<StrongPasswordCheckerProps> = ({
  controls,
  isPasswordMatch,
}) => {
  const {
    isWeak,
    isGood,
    isStrong,
    strongLength,
    specialCharacter,
    uppercaseLetters,
    lowercaseLetters,
  } = controls;

  return (
    <div className="mt-5 mb-4">
      <div className={`w-full bg-gray rounded-full`}>
        <div
          className={`${
            isWeak
              ? `bg-red w-[33.3%]`
              : isGood
              ? `bg-yellow w-[60.6%]`
              : isStrong
              ? `bg-blue w-full`
              : `w-0`
          } h-2 rounded-full transition-all duration-500`}
        ></div>
      </div>
      <div className={`mt-3 text-text-gray flex flex-col gap-3 text-sm`}>
        <StrengthSteps control={strongLength} title="At Least 6 Characters." />
        <StrengthSteps
          control={specialCharacter}
          title="At Least 1 Special Character."
        />
        <StrengthSteps
          control={uppercaseLetters}
          title="At Least 1 Uppercase Letter."
        />
        <StrengthSteps
          control={lowercaseLetters}
          title="At Least 1 Lower Letter."
        />
        <StrengthSteps control={isPasswordMatch} title="Password Match." />
      </div>
    </div>
  );
};

export default StrongPasswordChecker;
