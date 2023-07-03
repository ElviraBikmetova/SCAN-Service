import { createSlice } from "@reduxjs/toolkit";

const publicationsSlice = createSlice({
    name: 'publications',
    initialState: {
        histograms: {},
        ids: [],
        documents: [],
        result: false,
        isFetching: false
    },
    reducers: {
        publicationsSummary(state, action) {
            state.histograms = action.payload
        },
        publicationsIds(state, action) {
            state.ids = action.payload
        },
        publicationsDocuments(state, action) {
            state.documents = action.payload
            state.result = true
        },
        addDocuments(state, action) {
            // state.documents = action.payload
            // state.documents.push(action.payload)
            // state.documents.push(action.payload.map(item => item))
            // for (let i = 0; i < action.payload.length; i++) {
            //     state.documents.push(action.payload[i]);
            //   }
            state.documents = [...state.documents, ...action.payload]
        },
        toggleIsFetching(state, action) {
            state.isFetching = action.payload
        }
    }
})

export const {publicationsSummary, publicationsIds, publicationsDocuments, addDocuments, toggleIsFetching} = publicationsSlice.actions

export default publicationsSlice.reducer