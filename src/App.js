import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Music from './componants/Music/Music';
import PlayList from './componants/PlayList/PlayList';
import AboutUs from './componants/AboutUs/AboutUs';
import Login from './componants/Login/Login';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>

        <Route path='/' element={<Home />}></Route>
        <Route path='/Music' element={<Music />}></Route>
        <Route path='/PlayList' element={<PlayList />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Login' element={<Login />}></Route>

      </Routes>

      <Footer />
      
    </div>
  );
}

export default App;
