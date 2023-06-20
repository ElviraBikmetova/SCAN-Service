import $api from "./instance";
import { publicationsSummary } from "../store/publicationsSlice";

export const getSummary = (inn, tonality, limit, startDate, endDate, onlyMainRole) => {
    // console.log('inn in getSummary', inn)

    return dispatch => {
        $api.post('/objectsearch/histograms', {
            issueDateInterval: {startDate, endDate},
              "searchContext": {
                "targetSearchEntitiesContext": {
                  "targetSearchEntities": [
                    {
                      "type": "company",
                      "sparkId": null,
                      "entityId": null,
                      inn,
                      "maxFullness": true,
                      "inBusinessNews": null
                    }
                  ],
                  onlyMainRole,
                  tonality,
                  "onlyWithRiskFactors": false,
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
                "excludeTechNews": true,
                "excludeAnnouncements": true,
                "excludeDigests": true
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
        })
        .then( res => {
            // console.log(res.data)
            // localStorage.setItem('histograms', true)
            dispatch(publicationsSummary(res.data))
        })
        .then( () => {

        })
        .catch(err => console.log(err.message))
    }
}

export const getInfo = () => {
    return async dispatch => {
        try {
            const response = await  $api.get('/account/info')
            dispatch()
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}