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

export interface PostFileType {
  name: string;
  url: string;
  type: string;
  thumbnail?: string;
}

export interface Timestamp {
  seconds: number;
  nanoseconds: number;
}

export interface TimeStampe {
  seconds: number;
  nanoseconds: number;
}

export interface PostType {
  ownerName: string;
  ownerId: string;
  ownerProfile: string;
  description: string;
  postFiles: PostFileType[];
  postId: string;
  publishDate: Date | TimeStampe;
  sheduledDate: Date;
  likeCount: number;
  commentCount: number;
  shareCount: number;
  bookMarked?: boolean;
  bookMarkedPosts?: string[];
  hiddenPosts?: string[];
}

export interface PostToPublishType {
  description: string;
  postFiles: PostFileType[];
  ownerName: string;
  ownerId: string;
  ownerProfile?: string;
  postId?: string;
  publishDate?: Date;
}
