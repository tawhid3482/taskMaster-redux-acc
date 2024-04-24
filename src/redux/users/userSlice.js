import { createSlice } from "@reduxjs/toolkit";
const initialState = {
 
  userTasks:[
    {name:"tawhidul islam",
    email:"tawhidulIslam@gmail.com",}
  ],
};
const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {},
});
export default userSlice.reducer;