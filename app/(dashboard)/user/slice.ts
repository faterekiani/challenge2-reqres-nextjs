import { TUserInfo, TUsers } from "@/app/_lib/types/types";
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  allData: TUsers[]; // Array of User objects
  isLoading: boolean;
  error: null | string;
};

const initialState: UserState = {
  allData: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allData = action.payload;
    },
    deleteUser: (state, action) => {
      const userId = action.payload;
      const filteredData = state.allData.filter((user) => user.id !== userId);
      state.allData = filteredData;
    },
  },
});

export const { addData, deleteUser } = userSlice.actions;
export default userSlice.reducer;
