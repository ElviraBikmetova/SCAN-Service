import axios from "axios";
import { userAuth } from "../store/userSlice";

export const logIn = (login, password) => {
    return async dispatch => {
        try {
            const response = await axios.post(`https://gateway.scan-interfax.ru/api/v1/account/login`, {
                login,
                password
            })
            dispatch(userAuth(response.data.accessToken))
            localStorage.setItem('token', response.data.accessToken)
            localStorage.setItem('expire', response.data.expire)
            console.log(response.data)
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
