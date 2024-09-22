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

export type TResorces = {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
};

export type SearchParamsType = {
  page: string;
  size: string;
};

export type TNewUser = {
  name: string;
  job: string;
};
