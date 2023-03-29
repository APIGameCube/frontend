
import "../AboutUs/AboutUs.css"
import NawrsCard from './Cards/NawrsCard';
import ShahinCard from './Cards/ShahinCard';
import RakanCard from './Cards/RakanCard';
import MohannadCard from './Cards/MohannadCard';
import AlaaCard from './Cards/AlaaCard';



function AboutUs() {
  return (
    <div className="About">

      <div className='wholeaboutus'>
        <div className='aboutusbanner'>
          <div className="aboutustexts">
          <p className='paboutus'>Welcome to our gaming website!</p>
          <h3 className='paboutus'>Welcome to our gaming website! We are a team of five passionate developers who have come together to create an exciting platform for gamers of all levels. Our website offers a diverse range of games, from classic favorites to the latest releases, all in one convenient location. We strive to provide a user-friendly interface that makes it easy for you to browse and discover new games, connect with other gamers, and engage in a fun and immersive gaming experience. We are constantly working to improve our website and add new features to enhance your gaming experience. Thank you for choosing our website as your go-to gaming destination!</h3>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <cards className="aboutuscards">

          <ShahinCard />
          <RakanCard />
          <MohannadCard />
          <NawrsCard />
          <AlaaCard />

        </cards>
      </div>
    </div>

  );
}

export default AboutUs;
