import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import AboutUs from './componants/AboutUs/AboutUs';
import Login from './componants/Login/Login';
import Profile from './componants/Login/Profile';
import Favorite from './componants/Favorite/Favorite'

import Game from './componants/Game/Category/Game';
import Shooter from './componants/Game/Category/Shooter';
import Racing from './componants/Game/Category/Racing';
import Fighting from './componants/Game/Category/Fighting';
import MOBA from './componants/Game/Category/MOBA';
import MMORPG from './componants/Game/Category/MMORPG';
import MMO from './componants/Game/Category/MMO';
import Strategy from './componants/Game/Category/Strategy';
import Sports from './componants/Game/Category/Sports';

import './App.css';
import BattelRoyal from './componants/Game/Category/BattelRoyal';


function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Favorite' element={<Favorite />}></Route>
        <Route path='/Games' element={<Game />}></Route>
        <Route path='/Shooter' element={<Shooter />}></Route>
        <Route path='/Racing' element={<Racing />}></Route>
        <Route path='/Fighting' element={<Fighting />}></Route>
        <Route path='/MOBA' element={<MOBA />}></Route>
        <Route path='/MMORPG' element={<MMORPG />}></Route>
        <Route path='/MMO' element={<MMO />}></Route>
        <Route path='/Strategy' element={<Strategy />}></Route>
        <Route path='/BattelRoyal' element={<BattelRoyal />}></Route>
        <Route path='/Sports' element={<Sports />}></Route>

      </Routes>
    
      <Footer />

    </div>
  );
}

export default App;
