import { policyActions } from "./policies-slice";
import axios from "axios";

export const getAllPolicies = () => {
    return async (dispatch) => {
        try {

            let link = `/policies`;

        
            const { data } = await axios.get(link);
            dispatch(policyActions.getAllPolicies({
                policies:data.policies||[]
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}