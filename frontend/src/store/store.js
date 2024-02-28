import { configureStore } from "@reduxjs/toolkit";
import policySlice from "./policies-slice";

const store = configureStore({
    reducer: {policy:policySlice.reducer},
});

export default store;