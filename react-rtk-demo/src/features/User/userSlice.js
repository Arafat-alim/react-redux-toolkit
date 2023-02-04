import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

//! initial state
const initialState = {
  loading: false,
  data: [],
  error: "",
};

//! handling async task using createAsyncThunk
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  //! fetching
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.data);
});

const userSlice = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
      state.error = "";
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false;
      state.data = [];
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;
