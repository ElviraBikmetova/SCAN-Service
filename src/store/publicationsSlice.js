import { createSlice } from "@reduxjs/toolkit";

const publicationsSlice = createSlice({
    name: 'publications',
    initialState: {
        histograms: {},
        ids: [],
        documents: [],
        isResult: false,
        isFetching: false,
        isRequest: false,
        isEmptyResponse: false,
        isNewDocFetching: false
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
            state.isResult = true
        },
        addDocuments(state, action) {
            state.documents.push(...action.payload)
        },
        toggleIsFetching(state, action) {
            state.isFetching = action.payload
        },
        toggleIsRequest(state, action) {
            state.isFetching = action.payload
        },
        toggleisResult(state, action) {
            state.isResult = action.payload
        },
        toggleisEmptyResponse(state, action) {
            state.isEmptyResponse = action.payload
        },
        toggleIsNewDocFetching(state, action) {
            state.isNewDocFetching = action.payload
        }
    }
})

export const {publicationsSummary, publicationsIds, publicationsDocuments, addDocuments, toggleIsFetching, toggleIsRequest, toggleisResult, toggleisEmptyResponse, toggleIsNewDocFetching} = publicationsSlice.actions

export default publicationsSlice.reducer