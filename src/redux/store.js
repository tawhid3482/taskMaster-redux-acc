import { configureStore } from "@reduxjs/toolkit";
import taskSlice from "./features/task/taskSlice";
// import logger from './middlewares/logger'
const store = configureStore({
  reducer: {
    task: taskSlice,
  },
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
