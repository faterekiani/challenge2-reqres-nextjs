import { getAllUsersInfoApi } from "@/app/_lib/data-services";
import { useQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../slice";

export function useUsers(pageNumber: string, pageSize: string) {
  const dispatch = useDispatch();

  const {
    isLoading,
    data: userData,
    error,
  } = useQuery({
    queryKey: ["users", pageNumber, pageSize],
    queryFn: () => getAllUsersInfoApi(pageNumber, pageSize),
  });

  useEffect(() => {
    if (userData) {
      dispatch(addData(userData?.data));
    }
  }, [userData, dispatch]);

  return { isLoading, error, userData };
}
