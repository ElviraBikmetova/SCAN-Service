import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        token: '',
        isAuth: false
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
        toggleAuth(state) {
            state.isAuth = !state.isAuth
        }
    }
})

export const {userAuth, userLogout, toggleAuth} = userSlice.actions

export default userSlice.reducer