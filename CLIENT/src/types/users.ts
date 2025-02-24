export type userInfoType = {
  user_id: number;
  user_name: string;
  email: string;
  age: number;
  avatar?: string | null;
};

export type userUpdateType = {
  user_name?: string;
  email?: string;
  password?: string;
  age?: number;
  avatar?: string | null;
};
