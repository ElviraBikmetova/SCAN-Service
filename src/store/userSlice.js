import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        isAuth: true
    },
    reducers: {
        toggleAuth(state) {
            state.isAuth = !state.isAuth
        }
    }
})

export const {toggleAuth} = userSlice.actions

export default userSlice.reducer