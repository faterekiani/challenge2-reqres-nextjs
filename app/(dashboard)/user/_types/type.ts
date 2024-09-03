export type UsersInfo = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: User[];
};

export type User = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export type singleUser = {
  data: User;
};

export type NewUser = {
  first_name: string;
  last_name: string;
  email: string;
  id: number;
  avatar: string;
};

export type UpdateUser = {
  first_name: string;
  last_name: string;
  email: string;
};

export type UpdateUserPayload = {
  userId: number;
  updateUser: UpdateUser;
};
