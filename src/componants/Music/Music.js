import { React, useEffect, useState } from "react";
// import List from "./Components/List"
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
// import { IconName } from "react-icons/md";
import './Music.css';
import { Col, Row, Card, Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";



function Music() {




  const [gamesArr, setGamesArr] = useState([]);

  const gamesComponentesReq = async () => {
    const serverURL = `https://backend-black-nu.vercel.app/allGame`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    setGamesArr(data)
  }

  useEffect(() => {
    gamesComponentesReq();
  }, [])

  return (
    <div className="main">
      <div className="backgroundImg">
        <nav className="navbar">
          <Link to="/Games" className="link2">All Genres</Link>
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
        </div >
      </div>

      <Row xs={1} md={4} className="g-4">
        {gamesArr.map((gameCard) => {
          return <Col>
            <div>
              <Card style={{ width: '18rem' }} className="gamescards">
                <Card.Img className="gamesimg" variant="top" src={gameCard.thumbnail} />
                <Card.Body>
                  <Card.Title>{gameCard.title}</Card.Title>
                  <Card.Text>
                  </Card.Text>

                  <div className="BtnCard">
                    <div className="BtnCardDown">
                      <Button variant="dark" className="BtnCard0"><a href="https://github.com/Group04-Musicly" target="_blank" rel="noreferrer"><i className="fab fa-download"><FiDownload /></i></a></Button>
                    </div>
                    <div className="BtnCardinfo">
                      <Button variant="outline-secondary" className="BtnCard0" >info</Button>{' '}
                      <Button variant="outline-secondary" className="BtnCard0">🖤</Button>{' '}
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </div>
          </Col>
        })}
      </Row>
    </div>


  );
}

export default Music;
