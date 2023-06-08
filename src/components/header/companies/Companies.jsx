import css from './Companies.module.scss'

function Companies() {
    return (
        <div className={css.companies}>
            <div className={css.text}>
                <p>Использовано компаний</p>
                <p>Лимит по компаниям</p>
            </div>
            <div className={css.num}>
                <p>34</p>
                <p>100</p>
            </div>
        </div>
     );
}

export default Companies;