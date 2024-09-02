export type UserInfo = {
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

export type Resorce = {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
};

export type SearchParams = {
  page: number;
  size: number;
};

export type NewUser = {
  name: string;
  job: string;
};
