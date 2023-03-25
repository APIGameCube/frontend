import { React } from "react";
import TextField from "@mui/material/TextField";
// import List from "./Components/List"
import Carousel from 'react-bootstrap/Carousel';
import './Music.css';

function Music() {
  return (
    <div className="main">
{/* 
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
      </div> */}
      {/* <List /> */}
      <div className="TOP10">
        <a href="/Top10" style={{ fontSize: '30px' }} className='titleMusic'>
          TOP 10
        </a>
        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="https://m.media-amazon.com/images/M/MV5BNTViMTM1YTAtMWZkOC00MTY1LWFhMDktM2E2ZjMwMzQ5MWMyXkEyXkFqcGdeQXVyMTk4MDc2MzM@._V1_UY209_CR13,0,140,209_AL_.jp"
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
              src="https://m.media-amazon.com/images/M/MV5BNTViMTM1YTAtMWZkOC00MTY1LWFhMDktM2E2ZjMwMzQ5MWMyXkEyXkFqcGdeQXVyMTk4MDc2MzM@._V1_UY209_CR13,0,140,209_AL_.jp"
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
              src="https://m.media-amazon.com/images/M/MV5BNTViMTM1YTAtMWZkOC00MTY1LWFhMDktM2E2ZjMwMzQ5MWMyXkEyXkFqcGdeQXVyMTk4MDc2MzM@._V1_UY209_CR13,0,140,209_AL_.jp"
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

      <div className="ALL">
        <a href="/AllMusic" style={{ fontSize: '30px' }} className='titleMusic'>
          ALL
        </a>

        <Carousel variant="dark">
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="holder.js/800x400?text=First slide&bg=f5f5f5"
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
              src="holder.js/800x400?text=Second slide&bg=eee"
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
              src="holder.js/800x400?text=Third slide&bg=e5e5e5"
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
    </div >

  );
}

export default Music;
