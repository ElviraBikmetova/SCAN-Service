import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false,
        usedCompanyCount: 0,
        companyLimit: 0
    },
    reducers: {
        userAuth(state) {
            state.isAuth = true
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

export const {userAuth, userLogout, userInfo} = userSlice.actions

export default userSlice.reducer