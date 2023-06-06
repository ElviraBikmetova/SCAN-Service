import Homepage from '../homepage/Homepage';
import Authorization from '../authorization/Authorization';
import css from './Main.module.scss';
import { Route, Routes } from 'react-router-dom';
import SearchPage from '../search-page/SearchPage';

function Main() {
    return (
        <main className={css.main}>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    <Route path='authorization' element={<Authorization />} />
                    <Route path='search' element={<SearchPage />} />
                </Routes>

            </div>
        </main>
     );
}

export default Main;