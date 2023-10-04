import { Timestamp } from "./types";

export const passwordStrengthController = (password: string) => {
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
};

const getMonthName = (month: number): string => {
  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthNames[month];
};

const datemaker = (timestampOrDate: Timestamp | Date): Date => {
  let date: Date;

  if ("seconds" in timestampOrDate && "nanoseconds" in timestampOrDate) {
    const milliseconds =
      timestampOrDate.seconds * 1000 +
      Math.floor(timestampOrDate.nanoseconds / 1000000);
    date = new Date(milliseconds);
  } else {
    date = timestampOrDate;
  }
  return date;
};

export const dateFormater = (timestampOrDate: Timestamp | Date): string => {
  const date = datemaker(timestampOrDate);
  const month = getMonthName(date.getMonth());
  const day = date.getDate();
  const year = date.getFullYear();

  return `${month} ${day}, ${year}`;
};

export const timeFormater = (timestampOrDate: Timestamp | Date): string => {
  const date = datemaker(timestampOrDate);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (hours > 12) hours = hours - 12;

  const formattedHours = hours < 10 ? `0${hours}` : hours.toString();
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes.toString();

  return `${formattedHours}:${formattedMinutes}`;
};
