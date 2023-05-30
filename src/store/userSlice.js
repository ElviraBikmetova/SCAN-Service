import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: false
    },
    reducers: {
        toggleAuth(state, action) {
            const toggledUser = state.user
            toggledUser.isAuth = !toggledUser.isAuth
        }
    }
})

export const {toggleAuth} = userSlice.actions

export default userSlice.reducer