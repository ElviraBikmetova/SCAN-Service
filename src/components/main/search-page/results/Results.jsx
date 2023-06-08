import css from './Results.module.scss'
import results from '../../../../assets/img/results.svg'
import Document from './document/Document'
import docs from '../../../../json/documents.json'
import summary from '../../../../json/summary.json'
import ResultCard from './result-card/ResultCard'
import SummarySlider from '../../../sliders/SummarySlider'

function Results() {
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
                    <p className={css.found}>Найдено 4 221 вариантов</p>
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
                <button className={css.btn}>Показать больше</button>
            </section>
        </div>
     );
}

export default Results;