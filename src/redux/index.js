import { configureStore } from "@reduxjs/toolkit";
import accountReducer from "./reducers/accountSlice";

export default configureStore({
  reducer: {
    account: accountReducer,
  },
});
