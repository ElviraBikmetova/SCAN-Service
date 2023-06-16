import Homepage from './homepage/Homepage';
import Authorization from './authorization/Authorization';
import css from './Main.module.scss';
import { Navigate, Route, Routes } from 'react-router-dom';
import SearchPage from './search-page/SearchPage';
import { useSelector } from 'react-redux';

function Main() {
    const isAuth = useSelector(state => state.user.isAuth)
    const token = localStorage.getItem('token')

    const redirectFromAuth = <Navigate to='/' replace={true} state={{from: 'authorization'}} />
    const redirectFromSearch = <Navigate to='/authorization' replace={true} state={{from: 'search'}} />

    return (
        <main className={css.main}>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Homepage />} />
                    {isAuth && token ? <Route path='authorization' element={redirectFromAuth} />
                        : <Route path='authorization' element={<Authorization />} />}
                    {token ? <Route path='search' element={<SearchPage />} />
                        : <Route path='search' element={redirectFromSearch} />}
                </Routes>
            </div>
        </main>
     );
}

export default Main;