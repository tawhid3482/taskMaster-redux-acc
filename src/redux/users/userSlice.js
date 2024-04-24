import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  name: "tawhid",
  email: "tawhidulIslam@gmail.com",
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;
