export type ResourcesInfo = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: Resorce[];
};

export type Resorce = {
  id: number;
  name: string;
  year: string;
  color: string;
  pantone_value: string;
};

export type singleResorce = {
  data: Resorce;
};
