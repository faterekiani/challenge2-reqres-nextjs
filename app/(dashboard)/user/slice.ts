import { User } from "@/_lib/types/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type UserState = {
  // TODO
  users: User[]; // Array of User objects
  isLoading: boolean;
  error: null | string;
};

const initialState: UserState = {
  // TODO - change the name
  users: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    // TODO - type action: PayloadAction<string>
    addData: (state, action) => {
      state.users = action.payload;
    },

    deleteUser: (state, action) => {
      const userId = action.payload;
      const filteredData = state.users.filter((user) => user.id !== userId);
      return {
        ...state,
        users: filteredData,
      };
    },

    createNewUser: (state, action) => {
      state.users.push(action.payload);
    },

    editUser: (state, action) => {
      const { userId, updateUser } = action.payload;
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === userId ? { ...user, ...updateUser } : user
        ),
      };
    },
  },
});

export const { addData, deleteUser, createNewUser, editUser } =
  userSlice.actions;

export default userSlice.reducer;
