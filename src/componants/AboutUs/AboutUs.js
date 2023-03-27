import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "../AboutUs/AboutUs.css"
import NawrsCard from './Cards/NawrsCard';
import ShahinCard from './Cards/ShahinCard';
import RakanCard from './Cards/RakanCard';
import MohannadCard from './Cards/MohannadCard';
import AlaaCard from './Cards/AlaaCard';
import Carousel from 'react-bootstrap/Carousel';


function AboutUs() {
  return (
    <>
      <div className='wholeaboutus'>
        <div className='aboutusbanner'>
          <h1 className='h1about'>About Us</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
        <cards className="cards">

          <ShahinCard />
          <RakanCard />
          <MohannadCard />
          <NawrsCard />
          <AlaaCard />

        </cards>
      </div>
    </>
  );
}

export default AboutUs;
