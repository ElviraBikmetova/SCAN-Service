import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAuth, userLogout } from './store/userSlice';


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')
  const expire = localStorage.getItem('expire')

  const expireDate = new Date(expire)
  const now = new Date()

  useEffect(() => {
    if (token) {
      dispatch(userAuth(token))
    }
    if (now >= expireDate) {
      dispatch(userLogout(token))
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
