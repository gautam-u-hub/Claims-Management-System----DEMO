import { claimActions } from "./claims-slice";

import axios from "axios";


export const createClaim = (
    {
        policyId,
        claimDate,
        claimAmount,
        description,
    }) => {
    
    return async (dispatch) => {
        try {
            const config = {
                headers: { "content-Type": "application/json" },
            };
            const obj = {
                policyId,
                claimDate,
                claimAmount,
                description,
            }
            console.log(obj)

            const { data } = await axios.post(`http://localhost:4000/claims/${obj.policyId}`, {claimDate,claimAmount,description}, config);

            dispatch(claimActions.createClaim({
                claims:data.claim
            }))
        }
        catch (error) {
            console.log(error);
        }
    }

}