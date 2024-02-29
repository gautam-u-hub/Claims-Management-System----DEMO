import { userAction } from "./user-slice";
import axios from "axios";

const randomUser = {
    "email": "tpa1@gmail.com",
    "password": "password"

}
const email = "tpa1@gmail.com";
const password = "password";

export const loginUser = () => {
    return async (dispatch) => {
        try {

            let link = `http://localhost:4000/auth/login`;

            const config = { headers: { "content-Type": "application/json" } };


            const { data } = await axios.post(link, { email, password }, config);
            console.log(data);
            dispatch(userAction.loginUser({
                user: data.user || {}
            }));
        }
        catch (error) {
            console.log(error);
        }
    }
}