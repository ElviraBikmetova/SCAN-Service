import $api from "./instance";
import { addDocuments, publicationsDocuments, publicationsIds, publicationsSummary, toggleisEmptyResponse, toggleIsFetching, toggleIsNewDocFetching, toggleisResult } from "../store/publicationsSlice";

export const getSummary = (inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests) => {

    const inputData = {
        issueDateInterval: {startDate, endDate},
        "searchContext": {
          "targetSearchEntitiesContext": {
            "targetSearchEntities": [
              {
                "type": "company",
                "sparkId": null,
                "entityId": null,
                inn,
                maxFullness,
                inBusinessNews
              }
            ],
            onlyMainRole,
            tonality,
            onlyWithRiskFactors,
            "riskFactors": {
              "and": [],
              "or": [],
              "not": []
            },
            "themes": {
              "and": [],
              "or": [],
              "not": []
            }
          },
          "themesFilter": {
            "and": [],
            "or": [],
            "not": []
          }
        },
        "searchArea": {
          "includedSources": [],
          "excludedSources": [],
          "includedSourceGroups": [],
          "excludedSourceGroups": []
        },
        "attributeFilters": {
          excludeTechNews,
          excludeAnnouncements,
          excludeDigests
        },
        "similarMode": "duplicates",
        limit,
        "sortType": "issueDate",
        "sortDirectionType": "desc",
        "intervalType": "month",
        "histogramTypes": [
          "totalDocuments",
          "riskFactors"
        ]
    }

    return dispatch => {
        dispatch(toggleIsFetching(true))
        $api.post('/objectsearch/histograms', inputData)
        .then( res => {
            dispatch(toggleIsFetching(false))
            dispatch(publicationsSummary(res.data))
        })
        .then( () => {
            $api.post('/objectsearch', inputData)
            .then(res => {
                const ids = res.data.items.map(item => item.encodedId)
                dispatch(publicationsIds(ids))
                const idsForRequest = ids.slice(0, 10)
                if (idsForRequest.length) {
                    $api.post('/documents', {ids: idsForRequest})
                    .then(res => {
                        dispatch(publicationsDocuments(res.data))
                    })
                    .catch(err => console.log(err.response.data.message))
                } else {
                    dispatch(toggleisEmptyResponse(true))
                }
            })
            .catch(err => console.log(err.response.data.message))
        })
        .catch(err => {
            dispatch(toggleisEmptyResponse(true))
            dispatch(toggleisResult(true))
            console.log(err.response.data.message)
        })
    }
}

export const getDocuments= (ids) => {
    return async dispatch => {
        dispatch(toggleIsNewDocFetching(true))
        try {
            const response = await $api.post('/documents', {ids: ids})
            dispatch(addDocuments(response.data))
            dispatch(toggleIsNewDocFetching(false))
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}