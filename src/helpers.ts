export function passwordStrengthController(password: string) {
  let isPasswordWeak = false;
  let isPasswordGood = false;
  let isPasswordStrong = false;

  const specialCharacter = /[`~!@#$%/?^&*()_+=\-[\]{}|;:'",.<>]/.test(password);
  const uppercaseLetters = /[A-Z]/.test(password);
  const lowercaseLetters = /[a-z]/.test(password);
  const number = /[1234567890]/.test(password);
  const strongLength = password.length >= 6;
  const weakLength = password.length > 0 && password.length < 6;
  const isStrongCharacters =
    lowercaseLetters && uppercaseLetters && specialCharacter && number;

  isPasswordStrong = strongLength && isStrongCharacters;
  isPasswordGood = !isPasswordStrong
    ? isStrongCharacters || strongLength
    : false;
  isPasswordWeak = isPasswordGood ? false : weakLength;

  return {
    isPasswordStrong,
    isPasswordGood,
    isPasswordWeak,
    specialCharacter,
    uppercaseLetters,
    lowercaseLetters,
    number,
    strongLength,
  };
}
