
// import './App.css';
import Search from './components/search/search';
import Header from './components/header/Header';
import SearchMainBody from './components/searchMain/searchMainBody';
import SearchMainHead from './components/searchMain/searchMainHead';
import CardHotel from './components/card-hotel'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Search/>
      <SearchMainHead/>
      <SearchMainBody/>
      <CardHotel/>
      <Footer/>
    </div>

  );
}

export default App;
