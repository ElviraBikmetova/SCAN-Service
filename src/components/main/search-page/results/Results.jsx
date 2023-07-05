import css from './Results.module.scss'
import results from '../../../../assets/img/results.svg'
import Document from './document/Document'
import {SummarySlider, SummarySliderForMobile} from '../../../sliders/SummarySlider'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getDocuments, getSummary } from '../../../../requests/publications'
import clsx from 'clsx'
import loader from '../../../../assets/img/loader.gif'
import preloader from '../../../../assets/img/preloader.gif'
import getNoun from '../../../../utils/getNoun'

function Results(props) {
    const {setResultsVisible} = props
    localStorage.setItem('currentPage', 'resultsPage')
    const request = JSON.parse(localStorage.getItem('request'))
    const isResult = useSelector(state => state.publications.isResult)
    const isFetching = useSelector(state => state.publications.isFetching)
    const isEmptyResponse = useSelector(state => state.publications.isEmptyResponse)
    const isNewDocFetching = useSelector(state => state.publications.isNewDocFetching)
    const dispatch = useDispatch()

    useEffect(() => {
            setResultsVisible(true)
            dispatch(getSummary(request.inn, request.tonality, request.limit, request.startDate, request.endDate, request.maxFullness, request.inBusinessNews, request.onlyMainRole, request.onlyWithRiskFactors, request.excludeTechNews, request.excludeAnnouncements, request.excludeDigests))
    }, [])

    const ids = useSelector(state => state.publications.ids)
    const [overall, setOverall] = useState(0)
    const [idsCount, setIdsCount] = useState(0)

    useEffect(() => {
        if (ids.length > 0) {
            setOverall(ids.length)
        }
      }, [ids]);

    useEffect(() => {
        if (ids.length > 0) {
            const idsForRequest = ids.slice(idsCount,  idsCount+10)
            if(idsForRequest.length) {
            dispatch(getDocuments(idsForRequest))
            }
        }
      }, [idsCount]);

    const showMore = () => {
        setIdsCount(idsCount => idsCount + 10)
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
    }, [documents])

    return (
        <div className={css.results}>
            <section className={css.overall}>
                <div className={css.header}>
                    {!isResult ?
                        <div>
                            <h1 className={css.title}>Ищем. Скоро будут результаты</h1>
                            <p className={css.subtitle}>Поиск может занять некоторое время, просим сохранять терпение.</p>
                        </div>
                        :
                        <h1 className={css.title}>Результаты поиска</h1>
                    }
                    <img className={css.img} src={results} alt="results" />
                </div>
                {!isEmptyResponse ?
                <div className={css.summary}>
                    <h2 className={css.h2}>Общая сводка</h2>
                    <p className={css.found}>Найдено {overall} {getNoun(overall, 'вариант', 'варианта', 'вариантов')}</p>
                    <div className={css.overallSummary}>
                        <div className={css.summaryHeader}>
                            <p>Период</p>
                            <p>Всего</p>
                            <p>Риски</p>
                        </div>
                        <div className={clsx(css.slider, 'summary-slider')}>
                        {isFetching ?
                            <div className={css.loading}>
                                <img className={css.loader} src={loader} alt="loader" />
                                <p>Загружаем данные</p>
                            </div>
                            : <div>
                                <div className={css.summarySlider}><SummarySlider /></div>
                                <div className={css.summarySliderForMobile}><SummarySliderForMobile /></div>
                            </div>
                        }
                        </div>
                    </div>
                </div>
                : <p className={css.message}>Публикации по заданным параметрам не найдены</p>
                }
            </section>
            {!isEmptyResponse &&
            <section className={css.list}>
                <h2 className={css.h2}>Список документов</h2>
                <div className={css.docs}>
                    {docs.map(doc => <Document key={doc.id} doc={doc} />)}
                </div>
                {isNewDocFetching
                ? <div className={css.preloader}><img src={preloader} alt="loader" /></div>
                : !!remainingPublications &&
                <button className={css.btn} onClick={showMore}>Показать больше</button>
                }
            </section>
            }
        </div>
     );
}

export default Results;