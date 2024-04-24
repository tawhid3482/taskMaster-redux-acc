import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
import userSlice from "./users/userSlice";
// import logger from './middlewares/logger'
const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice : userSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
