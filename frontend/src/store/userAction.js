import { userAction } from "./user-slice";
import axios from "axios";




export const loginUser = ({ email, password }) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: { "content-Type": "application/json" },
            };

            const { data } = await axios.post(`http://localhost:4000/auth/login`, { email, password }, config);
            // const { data } = {};
            dispatch(userAction.loginUser({
                user: data.user,
                isAuthenticated:true
            }));


        } catch (error) {
            console.log(error);
        }
    }
}




export const logoutUser = () => {
    return async (dispatch) => {
        const logout = async () => {
            let link = `http://localhost:4000/auth/logout`;

            const res = await axios.get(link);


            return res;
        }

        try {
            await logout();

            dispatch(userAction.logoutUser({
                message: "success"

            }))


        }
        catch (e) {
            console.log(e);
        }

    }
}


export const registerUser = ({ email, name, password }) => {
    return async (dispatch) => {
        try {
            const config = {
                headers: { "content-Type": "application/json" },
            };


            const { data } = await axios.post(`http://localhost:4000/auth/register`, { name,email, password }, config);
            dispatch(userAction.registerUser({
                user: data.user
            }));
        }
        catch (e) {
            console.log(e);
        }
    }
}