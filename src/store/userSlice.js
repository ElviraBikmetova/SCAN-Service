import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        usedCompanyCount: 0,
        companyLimit: 0,
        error: ''
    },
    reducers: {
        userAuth(state) {
            state.isAuth = true
        },
        userError(state, action) {
            state.error = action.payload
        },
        userErrorRemove(state) {
            state.error = ''
        },
        userLogout(state) {
            localStorage.removeItem('token')
            localStorage.removeItem('expire')
            state.isAuth = false
        },
        userInfo(state, action) {
            state.usedCompanyCount = action.payload.usedCompanyCount
            state.companyLimit = action.payload.companyLimit
        }
    }
})

export const {userAuth, userError, userErrorRemove, userLogout, userInfo} = userSlice.actions

export default userSlice.reducer