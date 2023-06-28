import $api from "./instance";
import { userAuth, userError, userInfo } from "../store/userSlice";

export const logIn = (login, password) => {
    // console.log('login', login)
    return dispatch => {
        $api.post('/account/login', {
            login,
            password
        })
        .then( res => {
            dispatch(userAuth())
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('expire', res.data.expire)
        })
        .then( () => {
            dispatch(getInfo())
        })
        .catch(err => {
            // console.log(err.response.data.message)
            dispatch(userError(err.response.data.message))
        })
    }
}

export const getInfo = () => {
    return async dispatch => {
        try {
            const response = await  $api.get('/account/info')
            const usedCompanyCount = response.data.eventFiltersInfo.usedCompanyCount
            const companyLimit = response.data.eventFiltersInfo.companyLimit
            dispatch(userInfo({usedCompanyCount, companyLimit}))
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}
