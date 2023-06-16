import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        isAuth: false,
        usedCompanyCount: 0,
        companyLimit: 0
    },
    reducers: {
        userAuth(state, action) {
            state.token = action.payload.token
            state.isAuth = true
        },
        userLogout(state) {
            localStorage.removeItem('token')
            localStorage.removeItem('expire')
            state.token = ''
            state.isAuth = false
        },
        userInfo(state, action) {
            state.usedCompanyCount = action.payload.eventFiltersInfo.usedCompanyCount
            state.companyLimit = action.payload.eventFiltersInfo.companyLimit
        }
    }
})

export const {userAuth, userLogout, userInfo} = userSlice.actions

export default userSlice.reducer