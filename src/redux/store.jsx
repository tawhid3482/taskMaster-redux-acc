import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
import userSlice from "./users/userSlice";
import baseApi from "./features/api/baseApi";
// import logger from './middlewares/logger'
const store = configureStore({
  reducer: {
    taskSlice: taskSlice,
    userSlice: userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
