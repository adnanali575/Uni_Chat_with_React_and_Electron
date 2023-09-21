export interface standardDate {
  year: number;
  month: string;
  day: number;
  hour: number;
  minute: number;
  second: number;
  timezone: string;
}

export interface SignUpDataType {
  name: string;
  dob: string;
  phone: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface passwordStrengthControllerType {
  isPasswordStrong: boolean;
  isPasswordGood: boolean;
  isPasswordWeak: boolean;
  specialCharacter: boolean;
  uppercaseLetters: boolean;
  lowercaseLetters: boolean;
  number: boolean;
  strongLength: boolean;
}

export interface postType {
  postText?: string;
  postImages?: string[];
  ownerName?: string;
  ownerId?: string;
  postId?: string;
  publishDate?: Date;
  sheduledDate?: Date;
}
