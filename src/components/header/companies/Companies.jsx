import { useSelector } from 'react-redux';
import css from './Companies.module.scss'

function Companies() {
    const usedCompanyCount = useSelector(state => state.user.usedCompanyCount)
    const companyLimit = useSelector(state => state.user.companyLimit)

    return (
        <div className={css.companies}>
            <div className={css.text}>
                <p>Использовано компаний</p>
                <p>Лимит по компаниям</p>
            </div>
            <div className={css.num}>
                <p>{usedCompanyCount}</p>
                <p>{companyLimit}</p>
            </div>
        </div>
     );
}

export default Companies;