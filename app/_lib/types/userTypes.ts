export type TUserInfo = {
  data: TUsers[];
  total: number;
  isSuccess: boolean;
  errorMessage: string;
};

export type TUsers = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};
