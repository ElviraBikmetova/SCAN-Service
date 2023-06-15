import { BrowserRouter } from 'react-router-dom';
import Header from "./components/header/Header";
import Main from './components/main/Main';
import Footer from './components/footer/Footer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { userAuth } from './store/userSlice';


function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('token')

  useEffect(() => {
    if (token) {
      dispatch(userAuth(token))
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
