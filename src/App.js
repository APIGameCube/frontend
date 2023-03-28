import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Game from './componants/Game/Game';
import AboutUs from './componants/AboutUs/AboutUs';
import Login from './componants/Login/Login';
import Profile from './componants/Login/Profile';
import Favorite from './componants/Favorite/Favorite'

import './App.css';



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Games' element={<Game />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Favorite' element={<Favorite />}></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
