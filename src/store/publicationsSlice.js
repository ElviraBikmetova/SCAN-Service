import { createSlice } from "@reduxjs/toolkit";

const publicationsSlice = createSlice({
    name: 'publications',
    initialState: {
        summary: {}
    },
    reducers: {
        publicationsSummary(state, action) {
            state.summary = action.payload
        },
        userLogout(state) {

        },
        userInfo(state, action) {

        }
    }
})

export const {publicationsSummary} = publicationsSlice.actions

export default publicationsSlice.reducer