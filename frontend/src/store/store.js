import { configureStore } from "@reduxjs/toolkit";
import policySlice from "./policies-slice";
import userSlice from "./user-slice";

const store = configureStore({
    reducer: {policy:policySlice.reducer, user:userSlice.reducer},
});

export default store;