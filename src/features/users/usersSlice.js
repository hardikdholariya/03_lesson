import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const USERS_URL = "https://jsonplaceholder.typicode.com/posts";
console.log(userSlice);
const initialState = [];

export const fetchUsers = createAsyncThunk("users/fetchPosts", async () => {
  const response = await axios.get(USERS_URL);
  return [...response.data];
});

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      return action.payload;
    });
  },
});

export const selectAllUsers = (state) => state.users;

export default userSlice.reducer;
