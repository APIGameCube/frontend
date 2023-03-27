import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './componants/Header/Header';
import Footer from './componants/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './componants/Home/Home';
import Music from './componants/Music/Music';
import PlayList from './componants/PlayList/PlayList';
import AboutUs from './componants/AboutUs/AboutUs';
import Login from './componants/Login/Login';
import Profile from './componants/Login/Profile';
import Top10 from './componants/Top10/Top10'
import AllMusic from './componants/AllMusic/AllMusic'
import './App.css';



function App() {
  return (
    <div className="App">
      <Header />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/Games' element={<Music />}></Route>
        <Route path='/Favorite' element={<PlayList />}></Route>
        <Route path='/AboutUs' element={<AboutUs />}></Route>
        <Route path='/Login' element={<Login />}></Route>
        <Route path='/Profile' element={<Profile />}></Route>
        <Route path='/Top10' element={<Top10 />}></Route>
        <Route path='/AllMusic' element={<AllMusic />}></Route>
      </Routes>

      <Footer />

    </div>
  );
}

export default App;
