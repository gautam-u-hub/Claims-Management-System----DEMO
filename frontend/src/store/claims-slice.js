import { createSlice } from "@reduxjs/toolkit";



const claimSlice = createSlice({
    name: 'claims',
    initialState: {
        claims:{}
    },
    reducers: {
        createClaim(state, action) {
            state.claims=action.payload
        }
    }
    
})


export const claimActions = claimSlice.actions;

export default claimSlice;