import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { userAuth, userInfo, userLogout } from './store/userSlice';
import { getInfo } from './requests/user';


function App() {
  const dispatch = useDispatch()
  const expire = localStorage.getItem('expire')
  const expireDate = new Date(expire)
  const now = new Date()

  useEffect(() => {
    if (now < expireDate) {
      dispatch(userAuth())
      dispatch(getInfo())
    } else {
      dispatch(userLogout())
    }
  }, [])

  return (
    <BrowserRouter>
        <Header />
        <Main />
        <Footer />
    </BrowserRouter>
  );
}

export default App;
