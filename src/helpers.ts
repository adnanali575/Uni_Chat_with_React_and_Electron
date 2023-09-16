export function passwordStrengthController(password: string) {
  let isWeak = false;
  let isGood = false;
  let isStrong = false;

  const specialCharacter = /[`~!@#$%/?^&*()_+=\-[\]{}|;:'",.<>]/.test(password);
  const uppercaseLetters = /[A-Z]/.test(password);
  const lowercaseLetters = /[a-z]/.test(password);
  const strongLength = password.length >= 6;
  const weakLength = password.length > 0 && password.length < 6;

  const isLengthWeak = weakLength;
  const isLengthStrong =
    strongLength && lowercaseLetters && uppercaseLetters && specialCharacter;

  isWeak = isLengthWeak;
  isStrong = isLengthStrong;

  if (isLengthStrong) {
    isGood = false;
  } else {
    const isLengthGood =
      strongLength &&
      (lowercaseLetters || uppercaseLetters || specialCharacter);

    isGood = isLengthGood;
  }

  return {
    isStrong,
    isGood,
    isWeak,
    specialCharacter,
    uppercaseLetters,
    lowercaseLetters,
    strongLength,
  };
}
