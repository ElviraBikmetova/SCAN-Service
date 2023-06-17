import $api from "./instance";
import {  } from "../store/userSlice";
import { publicationsSummary } from "../store/publicationsSlice";

export const getSummary = () => {
    return dispatch => {
        $api.post('/objectsearch/histograms', {
            "issueDateInterval": {
                "startDate": "2019-01-01T00:00:00+03:00",
                "endDate": "2023-05-31T23:59:59+03:00"
              },
              "searchContext": {
                "targetSearchEntitiesContext": {
                  "targetSearchEntities": [
                    {
                      "type": "company",
                      "sparkId": null,
                      "entityId": null,
                      "inn": 7710137066,
                      "maxFullness": true,
                      "inBusinessNews": null
                    }
                  ],
                  "onlyMainRole": true,
                  "tonality": "any",
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
              "limit": 1000,
              "sortType": "sourceInfluence",
              "sortDirectionType": "desc",
              "intervalType": "month",
              "histogramTypes": [
                "totalDocuments",
                "riskFactors"
              ]
        })
        .then( res => {
            console.log(res.data)
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