import { TUserInfo, TUsers } from "@/app/_lib/types/types";
import { createSlice } from "@reduxjs/toolkit";

type UserState = {
  allDataRedux: TUsers[]; // Array of User objects
  isLoading: boolean;
  error: null | string;
};

const initialState: UserState = {
  allDataRedux: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addData: (state, action) => {
      state.allDataRedux = action.payload;
    },

    deleteUser: (state, action) => {
      const userId = action.payload;
      const filteredData = state.allDataRedux.filter(
        (user) => user.id !== userId
      );
      state.allDataRedux = filteredData;
    },

    createNewUser: (state, action) => {
      state.allDataRedux.push(action.payload);
    },
    editUser: (state, action) => {
      const { userId, updatedUserInfo } = action.payload;

      const update = state.allDataRedux.map((user) => {
        if (user.id === userId) return { ...user, updatedUserInfo };
        else return user;
      });
      state.allDataRedux = update;
    },
  },
});

export const { addData, deleteUser, createNewUser, editUser } =
  userSlice.actions;
export default userSlice.reducer;
