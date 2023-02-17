
// import './App.css';
import Search from './components/search/search';
import Header from './components/header/Header';
import SearchMainBody from './components/searchMain/searchMainBody';
import SearchMainHead from './components/searchMain/searchMainHead';
import CardHotel from './components/card-hotel/CardHotel'
import Footer from './components/footer/Footer'
import Signin from './components/Signin/Signin';
import LoginPage from './Pages/Login_page/login';
import SignUp from './components/SignUp/SignUp'
import SignUpPage from './Pages/SignUp_Page/signUp_page';
import {Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      {/* <Header></Header>
      <Search/>
      <SearchMainHead/>
      <SearchMainBody/>
      <CardHotel/>
      <Footer/> */}
      <Routes>
            <Route path='/signup' element={<SignUpPage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
          </Routes>
         
    </div>

  );
}

export default App;
