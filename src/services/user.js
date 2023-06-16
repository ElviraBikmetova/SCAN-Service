import axios from "axios";
import $api, { API_URL } from "../http";
import { userAuth, userInfo } from "../store/userSlice";

export const logIn = (login, password) => {
    return dispatch => {
        $api.post('/account/login', {
            login,
            password
        })
        .then( res => {
            dispatch(userAuth(res.data.accessToken))
            localStorage.setItem('token', res.data.accessToken)
            localStorage.setItem('expire', res.data.expire)
            console.log(res.data)
        })
        .then( () => {
            // $api.get('/account/info')
            // .then(res => {
            //     dispatch(userInfo(res.data.eventFiltersInfo.usedCompanyCount, res.data.eventFiltersInfo.companyLimit))
            //     console.log(res.data)
            // })
            // .catch(err => console.log(err.response.data.message))
            dispatch(getInfo())
        })
        .catch(err => console.log(err.response.data.message))
    }
}

export const getInfo = () => {
    return dispatch => {
        $api.get('/account/info')
        .then(res => {
            dispatch(userInfo(res.data.eventFiltersInfo.usedCompanyCount, res.data.eventFiltersInfo.companyLimit))
            console.log(res.data)
        })
        .catch(err => console.log(err.response.data.message))
    }
}

// export const logIn = (login, password) => {
//     return async dispatch => {
//         try {
//             const response = await $api.post('/account/login', {
//                 login,
//                 password
//             })
//             dispatch(userAuth(response.data.accessToken))
//             localStorage.setItem('token', response.data.accessToken)
//             localStorage.setItem('expire', response.data.expire)
//             console.log(response.data)
//         } catch (e) {
//             console.log(e.response.data.message)
//         }
//     }
// }

// export const getInfo = () => {
//     return async dispatch => {
//         try {
//             const response = await  $api.get('/account/info')
//             dispatch(userInfo(response.data.eventFiltersInfo.usedCompanyCount, response.data.eventFiltersInfo.companyLimit))
//             console.log(response.data)
//         } catch (e) {
//             console.log(e.response.data.message)
//         }
//     }
// }

