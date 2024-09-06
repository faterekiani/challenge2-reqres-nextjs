export type SearchParams = {
  page: number;
  size: number;
};

export type PaginationParams = {
  pageNumber: number;
  pageSize: number;
};

export type CreateNewUser = {
  name: string;
  job: string;
};

export type UpdateUser = {
  userId: number;
  name: string;
  job: string;
};

export type loginUserApiArgs = {
  email: string;
  password: string;
};

export type RegisterUserApiArgs = {
  email: string;
  password: string;
};
