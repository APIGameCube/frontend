import { React } from "react";
import TextField from "@mui/material/TextField";
// import List from "./Components/List"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
// import { IconName } from "react-icons/md";
import './Music.css';

function Music() {
  return (
    <div className="main">
      <div className="backgroundImg">
        <nav className="navbar">
          <Link to="/" className="link2">All Genres</Link>
          <Link to="/favorite" className="link2">Shooter </Link>
          <Link to="/favorite" className="link2">Racing </Link>
          <Link to="/favorite" className="link2">Fighting </Link>
          <Link to="/favorite" className="link2">MOBA </Link>
          <Link to="/favorite" className="link2">MMORPG </Link>
          <Link to="/favorite" className="link2">MMO </Link>
          <Link to="/favorite" className="link2">Strategy </Link>
          <Link to="/favorite" className="link2">Battle Royale</Link>
          <div className="search">
            <TextField
              id="outlined-basic"
              variant="outlined"
              fullWidth
              label=" Search"
            />
          </div>
        </nav>
        {/* <List /> */}

        <div className="TOP10">
          {/* <a href="/Top10" style={{ fontSize: '30px' }} className='titleMusic'>
            TOP 10
          </a> */}

          <Carousel variant="dark">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.600x338.jpg?t=1676412613"
                alt="First slide"
              />
              <Carousel.Caption>
                <h5>First slide label</h5>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.600x338.jpg?t=1676412613"
                alt="Second slide"
              />
              <Carousel.Caption>
                <h5>Second slide label</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://cdn.akamai.steamstatic.com/steam/apps/990080/ss_df93b5e8a183f7232d68be94ae78920a90de1443.600x338.jpg?t=1676412613"
                alt="Third slide"
              />
              <Carousel.Caption>
                <h5>Third slide label</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>

        </div>
      </div>
    </div >

  );
}

export default Music;
