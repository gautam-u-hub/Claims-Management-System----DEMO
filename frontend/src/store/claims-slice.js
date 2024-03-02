import { createSlice } from "@reduxjs/toolkit";

const claimSlice = createSlice({
    name: 'claims',
    initialState: {
        claims: {},
        error: null // Initialize error as null
    },
    reducers: {
        createClaimSuccess(state, action) {
            state.claims = action.payload;
            state.error = null; // Clear error when operation is successful
        },
        createClaimFailed(state, action) {
            state.error = action.payload; // Set error message
        }
    }
});

export const { createClaimSuccess, createClaimFailed } = claimSlice.actions;

export default claimSlice.reducer;
