export type RegisterRequest = {
  username: string;
  fullname: string;
  email: string;
  about: string;
  password: string;
  confirmPassword: string;
};

export type LoginRequest = {
  username: string | null;
  email: string | null;
  password: string;
};

export type User = {
  username: string;
  email: string;
  fullname: string;
};

export type AuthState = {
  user: User | null;
  token: string | null;
  isVerified: boolean;
  verifiedEmail: string | "";
};
