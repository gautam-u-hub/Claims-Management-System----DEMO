import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    }, reducers: {
        loginUser(state, action) {
            state.user = action.payload
        },
        logoutUser(state, action) {
            state.user = {};
        },
       
    }
});


export const userAction = userSlice.actions;
export default userSlice;
