import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { NewUser, UpdateUserPayload, User } from "./_types/type";

type UserState = {
	users: User[]; // Array of User objects
	isLoading: boolean;
	error: null | string;
};

const initialState: UserState = {
	users: [],
	isLoading: false,
	error: null,
};

const userSlice = createSlice({
	name: "user",
	initialState,
	reducers: {
		usersData: (state, action: PayloadAction<User[]>) => {
			state.users = action.payload;
		},

		deleteUser: (state, action: PayloadAction<number>) => {
			const userId = action.payload;
			const filteredData = state.users.filter((user) => user.id !== userId);
			return {
				...state,
				users: filteredData,
			};
		},

		createNewUser: (state, action: PayloadAction<NewUser>) => {
			state.users.push(action.payload);
		},

		editUser: (state, action: PayloadAction<UpdateUserPayload>) => {
			const { userId, updateUser } = action.payload;
			return {
				...state,
				users: state.users.map((user) =>
					user.id === userId ? { ...user, ...updateUser } : user,
				),
			};
		},
	},
});

export const { usersData, deleteUser, createNewUser, editUser } =
	userSlice.actions;

export default userSlice.reducer;
