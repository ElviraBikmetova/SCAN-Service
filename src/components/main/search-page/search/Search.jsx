import css from './Search.module.scss'
import search from '../../../../assets/img/search.svg'
import { getSummary } from '../../../../requests/publications'
import { useDispatch } from 'react-redux'
import { useState } from 'react'

function Search(props) {
    const {setResultsVisible} = props
    const [inn, setInn] = useState('7710137066') // убрать значение по умолчанию
    const [tonality, setTonality ] = useState('any')
    const [limit, setLimit ] = useState('1000') // убрать значение по умолчанию
    const [startDate, setStartDate] = useState('2022-01-01') // убрать значение по умолчанию
    const [endDate, setEndDate] = useState('2023-06-01') // убрать значение по умолчанию
    const [maxFullness, setMaxFullness] = useState(false)
    const [inBusinessNews, setInBusinessNews] = useState(false)
    const [onlyMainRole, setOnlyMainRole] = useState(false)
    const [onlyWithRiskFactors , setOnlyWithRiskFactors] = useState(false)
    const [excludeTechNews , setExcludeTechNews] = useState(false)
    const [excludeAnnouncements , setExcludeAnnouncements] = useState(false)
    const [excludeDigests , setExcludeDigests] = useState(false)

    // console.log(onlyMainRole)
    const request = {inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests}
    localStorage.setItem('request', JSON.stringify(request))

    const dispatch = useDispatch()
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(getSummary(inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests))
        setResultsVisible(true)
    }

    return (
        <div className={css.search}>
            <div>
                <h1 className={css.title}>Найдите необходимые данные в пару кликов.</h1>
                <p className={css.subtitle}>Задайте параметры поиска. <br/> Чем больше заполните, тем точнее поиск.</p>
                <form className={css.form} onSubmit={handleSubmit}>
                    <div className={css.left}>
                        <label htmlFor="inn">ИНН компании *</label>
                        <input id='inn' type="number" placeholder='10 цифр' value={inn} onChange={e => setInn(e.target.value)} />
                        <label htmlFor="tone">Тональность</label>
                        <select id="tone" value={tonality} onChange={e => setTonality(e.target.value)} >
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <label htmlFor="num">Количество документов в выдаче *</label>
                        <input id='num' type="number" placeholder='От 1 до 1000' value={limit} onChange={e => setLimit(e.target.value)} />
                        <label htmlFor="date">Диапазон поиска *</label>
                        <div className={css.date}>
                            <input id='date' type="date" placeholder='Дата начала' value={startDate} onChange={e => setStartDate(e.target.value)} />
                            <input type="date" placeholder='Дата конца' value={endDate} onChange={e => setEndDate(e.target.value)} />
                        </div>
                    </div>
                    <div className={css.right}>
                        <div className={css.checkbox}>
                            <label><input type="checkbox" value={maxFullness} onChange={e => setMaxFullness(e.target.checked)} />Признак максимальной полноты</label>
                            <label><input type="checkbox" value={inBusinessNews} onChange={e => setInBusinessNews(e.target.checked)} />Упоминания в бизнес-контексте</label>
                            <label><input type="checkbox" value={onlyMainRole} onChange={e => setOnlyMainRole(e.target.checked)} />Главная роль в публикации</label>
                            <label><input type="checkbox" value={onlyWithRiskFactors} onChange={e => setOnlyWithRiskFactors(e.target.checked)} />Публикации только с риск-факторами</label>
                            <label><input type="checkbox" value={excludeTechNews} onChange={e => setExcludeTechNews(e.target.checked)} />Включать технические новости рынков</label>
                            <label><input type="checkbox" value={excludeAnnouncements} onChange={e => setExcludeAnnouncements(e.target.checked)} />Включать анонсы и календари</label>
                            <label><input type="checkbox" value={excludeDigests} onChange={e => setExcludeDigests(e.target.checked)} />Включать сводки новостей</label>
                        </div>
                        <div>
                            <button className={css.submit} type='submit'>Поиск</button>
                            <p className={css.required}>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
            </div>
            <img src={search} alt="search" />
        </div>
     );
}

export default Search;