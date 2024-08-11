import { useQuery } from "@tanstack/react-query";
import { getAllUsersInfo } from "../data-services";

type TGetListOfUsers = {
  data: TItem[];
  total: number;
};

type TItem = {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  avatar: string;
};

export const useUserQuery = (pageNumber: number, pageSize: number) => {
  return useQuery<TGetListOfUsers>({
    queryKey: ["user"],
    queryFn: getAllUsersInfo,
  });
};
