import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  tasks: []
};
const counterSlice = createSlice({
  name: "taskSlice",
  initialState,
  reducers: {
    
  },
});

export default counterSlice.reducer;

