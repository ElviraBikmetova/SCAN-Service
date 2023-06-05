import css from './Search.module.scss'
import search from '../../assets/search.svg'

function Search() {
    return (
        <div className={css.search}>
            <div>
                <h1 className={css.title}>Найдите необходимые данные в пару кликов.</h1>
                <p className={css.subtitle}>Задайте параметры поиска. <br/> Чем больше заполните, тем точнее поиск.</p>
                <form className={css.form} action="">
                    <div className={css.left}>
                        <label htmlFor="inn">ИНН компании *</label>
                        <input id='inn' type="number" placeholder='10 цифр' />
                        <label htmlFor="tone">Тональность</label>
                        <select name="" id="tone">
                            <option value="">Любая</option>
                            <option value="">Позитивная</option>
                            <option value="">Негативная</option>
                        </select>
                        <label htmlFor="num">Количество документов в выдаче *</label>
                        <input id='num' type="number" placeholder='От 1 до 1000' />
                        <label htmlFor="date">Диапазон поиска *</label>
                        <div className={css.date}>
                            <input id='date' type="date" placeholder='Дата начала' />
                            <input type="date" />
                        </div>
                    </div>
                    <div className={css.right}>
                        <div className={css.checkbox}>
                            <label><input type="checkbox" />Признак максимальной полноты</label>
                            <label><input type="checkbox" />Упоминания в бизнес-контексте</label>
                            <label><input type="checkbox" />Главная роль в публикации</label>
                            <label><input type="checkbox" />Публикации только с риск-факторами</label>
                            <label><input type="checkbox" />Включать технические новости рынков</label>
                            <label><input type="checkbox" />Включать анонсы и календари</label>
                            <label><input type="checkbox" />Включать сводки новостей</label>
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