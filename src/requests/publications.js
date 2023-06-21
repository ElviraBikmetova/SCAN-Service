import $api from "./instance";
import { publicationsDocuments, publicationsList, publicationsSummary } from "../store/publicationsSlice";

export const getSummary = (inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests) => {
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
                dispatch(publicationsList(res.data))
            })
            .catch(err => console.log(err.message))
        })
        .then(() => {
           dispatch(getDocuments())
        })
        .catch(err => console.log(err.message))
    }
}

export const getDocuments= () => {
    return async dispatch => {
        try {
            const response = await  $api.post('/documents', {
                "ids": [ "1:0JPQqdGM0JNWCdCzf2Jt0LHQotGV0ZUh0ZbRlBXCt0Je0JHQruKAnDcUXkZQ0YvQscKnehLRnNC1KtGK0Ll9BWLigLo/HXXCrhw="
  ]
            })
            dispatch(publicationsDocuments())
        } catch (e) {
            console.log(e.response.data.message)
        }
    }
}