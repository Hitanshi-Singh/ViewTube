import { configureStore } from "@reduxjs/toolkit";
import appslice from "./appslice";
import searchSlice from "./searchSlice";
import chatSlice from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appslice,
    search: searchSlice,
    chat: chatSlice,
  },
});
export default store;
