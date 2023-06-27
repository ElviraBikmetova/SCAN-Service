import $api from "./instance";
import { addDocuments, publicationsDocuments, publicationsIds, publicationsSummary } from "../store/publicationsSlice";

export const getSummary = (inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests) => {
    // let ids
    // console.log('inn in getSummary', inn)
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
        $api.post('/objectsearch/histograms', inputData)
        .then( res => {
            // console.log(res.data)
            // localStorage.setItem('histograms', true)
            dispatch(publicationsSummary(res.data))
        })
        .then( () => {
            $api.post('/objectsearch', inputData)
            .then(res => {
                const ids = res.data.items.map(item => item.encodedId)
                dispatch(publicationsIds(ids))
                const idsForRequest = ids.slice(0, 10)
                $api.post('/documents', {ids: idsForRequest})
                .then(res => {
                    dispatch(publicationsDocuments(res.data))
                })
                .catch(err => console.log(err.response.data.message))
            })
            .catch(err => console.log(err.response.data.message))
        })
        .catch(err => console.log(err.response.data.message))
    }
}

export const getDocuments= (ids) => {
    return async dispatch => {
        try {
            const response = await $api.post('/documents', {ids: ids})
            dispatch(addDocuments(response.data))
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}