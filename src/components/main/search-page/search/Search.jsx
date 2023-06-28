import css from './Search.module.scss'
import search from '../../../../assets/img/search.svg'
import { getSummary } from '../../../../requests/publications'
import { useDispatch } from 'react-redux'
import { useState } from 'react'
import { validateInn } from '../../../../utils/validation'
import { useForm } from 'react-hook-form'

function Search(props) {
    const {setResultsVisible} = props
    // const [limit, setLimit ] = useState('1000') // убрать значение по умолчанию
    const [maxFullness, setMaxFullness] = useState(false)
    const [inBusinessNews, setInBusinessNews] = useState(false)
    const [onlyMainRole, setOnlyMainRole] = useState(false)
    const [onlyWithRiskFactors , setOnlyWithRiskFactors] = useState(false)
    const [excludeTechNews , setExcludeTechNews] = useState(false)
    const [excludeAnnouncements , setExcludeAnnouncements] = useState(false)
    const [excludeDigests , setExcludeDigests] = useState(false)

    const {
        register,
        formState: {errors, isValid},
        handleSubmit,
        watch
    } = useForm({
        mode: 'onBlur',
        defaultValues: {
            inn: '7710137066', // убрать значение по умолчанию
            tonality: 'any',
            limit: 1000, // убрать значение по умолчанию
            startDate: '2022-01-01', // убрать значение по умолчанию
            endDate: '2023-06-01' // убрать значение по умолчанию
        }
    })

    console.log(errors)
    console.log(isValid)

    const limitValidate = {
        required: 'Обязательное поле',
        min: {
            value: 1,
            message: 'Введите число от 1 до 1000'
        },
        max: {
            value: 1000,
            message: 'Введите число от 1 до 1000'
        },
        valueAsNumber: true
    }

    const inn = watch('inn')
    const tonality = watch('tonality')
    const limit = watch('limit')
    const startDate = watch('startDate')
    const endDate = watch('endDate')

    const validate = () => {
        const startsDate = new Date(startDate);
        const endsDate = new Date(endDate);
        const currentDate = new Date();
        let errors = ''
        // if ((startDate > endDate) || (startDate > currentDate) || (endDate > currentDate)) {
        //    dateErrors = 'Введите корректные данные'
        //   }

        if (startsDate > endsDate) {
            errors = "Дата окончания должна быть позже даты начала"
          }

          if (startsDate > currentDate) {
            errors = "Дата начала не может быть в будущем времени"
          }

          if (endsDate > currentDate) {
            errors = "Дата окончания не может быть в будущем времени"
          }

          return errors
      }

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
                        <input id='inn' placeholder='10 цифр' {...register('inn', {required: 'Обязательное поле'})} />
                        {errors?.inn && <p className={css.error}>{errors?.inn?.message}</p>}
                        <label htmlFor="tonality">Тональность</label>
                        <select id="tonality" {...register('tonality')} >
                            <option value="any">Любая</option>
                            <option value="positive">Позитивная</option>
                            <option value="negative">Негативная</option>
                        </select>
                        <label htmlFor="limit">Количество документов в выдаче *</label>
                        {/* <input id='limit' type="number" placeholder='От 1 до 1000' value={limit} onChange={e => setLimit(e.target.value)} /> */}
                        <input id='limit' type="number" placeholder='От 1 до 1000' {...register('limit', limitValidate)} />
                        {errors?.limit && <p className={css.error}>{errors?.limit?.message}</p>}
                        <label htmlFor="date">Диапазон поиска *</label>
                        <div className={css.date}>
                            <div>
                                <input id='date' type="date" placeholder='Дата начала' {...register('startDate', {required: 'Обязательное поле', validate})} />
                                {errors?.startDate && <p className={css.error}>{errors?.startDate?.message}</p>}
                            </div>
                            <div>
                                <input type="date" placeholder='Дата конца' {...register('endDate', {required: 'Обязательное поле', validate})} />
                                {errors?.endDate && <p className={css.error}>{errors?.endDate?.message}</p>}
                            </div>
                            {/* {dateErrors && <p className={css.error}>{dateErrors}</p>} */}
                        </div>
                        {/* {(errors?.startDate || errors?.endDate) && <p className={css.error}>{errors?.startDate?.message || errors?.endDate?.message}</p>} */}
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
                            <button className={css.submit} type='submit' disabled={!isValid} >Поиск</button>
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