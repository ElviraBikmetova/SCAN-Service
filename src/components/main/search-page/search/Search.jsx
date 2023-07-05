import css from './Search.module.scss'
import search from '../../../../assets/img/search.svg'
import { getSummary } from '../../../../requests/publications'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { dateValidate, innValidate, limitValidate } from '../../../../utils/validate'

function Search(props) {
    const {setResultsVisible} = props
    const [maxFullness, setMaxFullness] = useState(false)
    const [inBusinessNews, setInBusinessNews] = useState(false)
    const [onlyMainRole, setOnlyMainRole] = useState(false)
    const [onlyWithRiskFactors , setOnlyWithRiskFactors] = useState(false)
    const [excludeTechNews , setExcludeTechNews] = useState(true)
    const [excludeAnnouncements , setExcludeAnnouncements] = useState(true)
    const [excludeDigests , setExcludeDigests] = useState(true)

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        watch
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            // inn: '7710137066', // убрать значение по умолчанию
            tonality: 'any',
            // limit: 1000, // убрать значение по умолчанию
            // startDate: '2022-01-01', // убрать значение по умолчанию
            // endDate: '2023-06-01' // убрать значение по умолчанию
        }
    })

    const inn = watch('inn')
    const tonality = watch('tonality')
    const limit = watch('limit')
    const startDate = watch('startDate')
    const endDate = watch('endDate')

    const request = {inn, tonality, limit, startDate, endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests}
    localStorage.setItem('request', JSON.stringify(request))

    const dispatch = useDispatch()
    const handleSubmitForm = data => {
        dispatch(getSummary(data.inn, data.tonality, data.limit, data.startDate, data.endDate, maxFullness, inBusinessNews, onlyMainRole, onlyWithRiskFactors, excludeTechNews, excludeAnnouncements, excludeDigests))
        setResultsVisible(true)
    }

    return (
        <div className={css.search}>
            <div>
                <h1 className={css.title}>Найдите необходимые данные в пару кликов.</h1>
                <p className={css.subtitle}>Задайте параметры поиска. <br/> Чем больше заполните, тем точнее поиск.</p>
                <form className={css.form} onSubmit={handleSubmit(handleSubmitForm)}>
                    <div className={css.left}>
                        <label htmlFor="inn">ИНН компании *</label>
                        <input id='inn' placeholder='10 цифр' {...register('inn', innValidate)} />
                        {errors?.inn && <p className={css.error}>{errors?.inn?.message}</p>}
                        <label htmlFor="tonality">Тональность</label>
                        <select id="tonality" {...register('tonality')} >
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <label htmlFor="limit">Количество документов в выдаче *</label>
                        <input id='limit' type="number" placeholder='От 1 до 1000' {...register('limit', limitValidate)} />
                        {errors?.limit && <p className={css.error}>{errors?.limit?.message}</p>}
                        <label htmlFor="date">Диапазон поиска *</label>
                        <div className={css.date}>
                            <div>
                                <input id='date' type="date" placeholder='Дата начала' data-placeholder='Дата начала' {...register('startDate', dateValidate)} />
                            </div>
                            <div>
                                <input type="date" placeholder='Дата конца' data-placeholder='Дата конца' {...register('endDate', dateValidate)} />
                            </div>
                        </div>
                        {((errors?.startDate || errors?.endDate) && !isValid) && <p className={css.error}>{errors?.startDate?.message || errors?.endDate?.message}</p>}
                    </div>
                    <div className={css.right}>
                        <div className={css.checkbox}>
                            <label><input type="checkbox" name='maxFullness' value={maxFullness} onChange={e => setMaxFullness(e.target.checked)} /><span>Признак максимальной полноты</span></label>
                            <label><input type="checkbox" name='inBusinessNews' value={inBusinessNews} onChange={e => setInBusinessNews(e.target.checked)} /><span>Упоминания в бизнес-контексте</span></label>
                            <label><input type="checkbox" name='onlyMainRole' value={onlyMainRole} onChange={e => setOnlyMainRole(e.target.checked)} /><span>Главная роль в публикации</span></label>
                            <label><input type="checkbox" name='onlyWithRiskFactors' value={onlyWithRiskFactors} onChange={e => setOnlyWithRiskFactors(e.target.checked)} /><span>Публикации только с риск-факторами</span></label>
                            <label><input type="checkbox" name='excludeTechNews' value={excludeTechNews} onChange={e => setExcludeTechNews(!e.target.checked)} /><span>Включать технические новости рынков</span></label>
                            <label><input type="checkbox" name='excludeAnnouncements' value={excludeAnnouncements} onChange={e => setExcludeAnnouncements(!e.target.checked)} /><span>Включать анонсы и календари</span></label>
                            <label><input type="checkbox" name='excludeDigests' value={excludeDigests} onChange={e => setExcludeDigests(!e.target.checked)} /><span>Включать сводки новостей</span></label>
                        </div>
                        <div>
                            <button className={css.submit} type='submit' disabled={!isValid} >Поиск</button>
                            <p className={css.required}>* Обязательные к заполнению поля</p>
                        </div>
                    </div>
                </form>
            </div>
            <img className={css.img} src={search} alt="search" />
        </div>
     );
}

export default Search;