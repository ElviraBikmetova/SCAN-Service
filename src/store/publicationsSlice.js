import { createSlice } from "@reduxjs/toolkit";

const publicationsSlice = createSlice({
    name: 'publications',
    initialState: {
        histograms: {},
        objectsearch: {},
        documents: {}
    },
    reducers: {
        publicationsSummary(state, action) {
            state.histograms = action.payload
        },
        publicationsList(state, action) {
            state.objectsearch = action.payload
        },
        publicationsDocuments(state, action) {
            state.documents = action.payload
        }
    }
})

export const {publicationsSummary, publicationsList, publicationsDocuments} = publicationsSlice.actions

export default publicationsSlice.reducer