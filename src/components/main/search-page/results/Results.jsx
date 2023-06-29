import css from './Results.module.scss'
import results from '../../../../assets/img/results.svg'
import Document from './document/Document'
// import docs from '../../../../json/documents.json'
import SummarySlider from '../../../sliders/SummarySlider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDocuments, getSummary } from '../../../../requests/publications'

function Results(props) {
    const {setResultsVisible} = props
    localStorage.setItem('currentPage', 'resultsPage')
    const request = JSON.parse(localStorage.getItem('request'))
    const dispatch = useDispatch()

    useEffect(() => {
        // if (currentPage) {
            setResultsVisible(true)
            dispatch(getSummary(request.inn, request.tonality, request.limit, request.startDate, request.endDate, request.maxFullness, request.inBusinessNews, request.onlyMainRole, request.onlyWithRiskFactors, request.excludeTechNews, request.excludeAnnouncements, request.excludeDigests))
        // }
    }, [])

    const ids = useSelector(state => state.publications.ids)
    const [overall, setOverall] = useState(0)
    const [idsCount, setIdsCount] = useState(0)
    // console.log('objectsearch', objectsearch)


    useEffect(() => {
        if (ids.length > 0) {
            setOverall(ids.length)
        //   console.log(objectsearch.items.length)
            // const idsForRequest = ids.slice(idsCount,  idsCount+10)
            // if(idsForRequest.length) {
            // dispatch(getDocuments(idsForRequest))
            // }
        }
      }, [ids]);

    useEffect(() => {
        if (ids.length > 0) {
            // setOverall(ids.length)
        //   console.log(objectsearch.items.length)
            const idsForRequest = ids.slice(idsCount,  idsCount+10)
            if(idsForRequest.length) {
            dispatch(getDocuments(idsForRequest))
            }
        }
      }, [idsCount]);

      const showMore = () => {
        // const idsForRequest = ids.slice(idsCount, 10);
        setIdsCount(idsCount => idsCount + 10)
      }

      function getVariantWord(number) {
        let word = 'варант';
        if (number % 10 === 1 && number % 100 !== 11) {
          word += '';
        } else if ((number % 10 >= 2 && number % 10 <= 4) && (number % 100 < 10 || number % 100 >= 20)) {
          word += 'а';
        } else {
          word += 'ов';
        }
        return word;
      }

    const documents = useSelector(state => state.publications.documents)
    const [docs, setDocs] = useState([])
    let remainingPublications = ids.length - documents.length

    useEffect(() => {
        if (Array.isArray(documents)) {
            setDocs(documents.map(doc => doc.ok))
          } else {
            console.error('documents is not an array')
          }
        // setPublications(documents.map(doc => doc.ok))
            // console.log(documents)
    }, [documents])
    // const doc =  publications
    // const doc = documents.length > 0 ? documents[0].ok : null
    // console.log(Array.isArray(docs))

    return (
        <div className={css.results}>
            <section className={css.overall}>
                <div className={css.header}>
                    <div>
                        <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
                        <p className={css.subtitle}>Поиск может занять некоторое время, просим сохранять терпение.</p>
                    </div>
                    <img src={results} alt="results" />
                </div>
                <div className={css.summary}>
                    <h2 className={css.h2}>Общая сводка</h2>
                    <p className={css.found}>Найдено {overall} {getVariantWord(overall)}</p>
                    <div className={css.overallSummary}>
                        <div className={css.summaryHeader}>
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                        <div className={css.slider}>
                            <SummarySlider />
                        </div>
                    </div>
                </div>
            </section>
            <section className={css.list}>
                <h2 className={css.h2}>Список документов</h2>
                <div className={css.docs}>
                    {docs.map(doc => <Document key={doc.id} doc={doc} />)}
                </div>
                {!!remainingPublications && <button className={css.btn} onClick={showMore} >Показать больше</button>}
            </section>
        </div>
     );
}

export default Results;