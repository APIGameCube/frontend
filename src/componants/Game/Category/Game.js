import { React, useEffect, useState } from "react";
import Carousel from 'react-bootstrap/Carousel';
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import GameModal from "../../GameModal/GameModal";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useAuth0 } from '@auth0/auth0-react';
import Favorite from "../../Favorite/Favorite";
import ModalGames from "../../ModalGames/ModalGames";
import SecondNavbar from "../SecondNavbar/SecondNavbar";
import ReactPaginate from 'react-paginate';

import './Game.css'

function Game(props) {
  //.....

  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  //.....
  const { isAuthenticated } = useAuth0();

  const [showFlag, setShowFlag] = useState(false)
  const [clickedCard, setClickedCard] = useState({});
  const handleShow = (item) => {
    console.log(item);
    setClickedCard(item);
    setShowFlag(true);
  }

  const handleClose = () => {
    setShowFlag(false);
  }
  //............
  const [showFlagInfo, setShowFlagInfo] = useState(false)
  const [clickedCardInfo, setClickedCardInfo] = useState({});
  const handleShowInfo = (item) => {
    console.log(item);
    setClickedCard(item);
    setShowFlagInfo(true);
  }

  const handleCloseInfo = () => {
    setShowFlagInfo(false);
  }

  //.........
  const [gamesArr, setGamesArr] = useState([]);
  const [inputText, setInputText] = useState("");

  const gamesComponentesReq = async () => {
    const serverURL = `https://backend-production-8a11.up.railway.app/search?title=${inputText}`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    setGamesArr(data)
  }


  useEffect(() => {
    gamesComponentesReq();
  }, [inputText])
  //.........

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
  //.........
  const handlePageClick = (data) => {
    const selectedPage = data.selected;
    setCurrentPage(selectedPage + 1);
  };

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  const currentPosts = gamesArr.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="main">
      <div  style={{backgroundColor: '#090c22', paddingBottom: '50px'}} >
        <SecondNavbar inputText={inputText} setInputText={setInputText} />
        {/* <List /> */}

        <div className="TOP10">
            <Carousel variant="dark">
            <Carousel.Item>
              <div className="imgback">
              <img
                className="d-block w-100"
                src="https://static-prod-web.miniclip.com/assets/news/17_PR_SYBO.jpg"
                alt="First slide"
              />
              </div>
              <Carousel.Caption>
                {/* <h5>First slide label</h5> */}
                {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/qi3gqverqthxatrgu18v/fortnite-logo2?fimg-ssr-default"
                alt="Second slide"
              />
              <Carousel.Caption>
                {/* <h5>Second slide label</h5> */}
                {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src="https://505games.com/wp-content/uploads/2021/02/GOW752x430.jpg"
                alt="Third slide"
              />
              <Carousel.Caption>
                {/* <h5>Third slide label</h5> */}
                {/* <p> Praesent commodo cursus magna, vel scelerisque nisl consectetur.  </p> */}
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          <div className="pImg">
          <p className="pExp">Explore the ultimate gaming universe </p>  
          <p className="pExp2">with us</p>      
          <img
                className="d-bloc"
                src="https://i.gifer.com/AQQY.gif"
                alt="Third slide"
              />
              </div>
        </div >
      </div>

      <Row xs={1} md={4} className="g-4">
        {currentPosts.map((gameCard) => {
          return <Col key={gameCard.id}>
            <div>
              <Card style={{ width: '18rem' }} className="gamescards">
                <Card.Img className="gamesimg" variant="top" src={gameCard.thumbnail} />
                <Card.Body>
                  <Card.Title>{gameCard.title}</Card.Title>
                  <Card.Text>
                  </Card.Text>

                  <div className="BtnCard">
                    <div className="BtnCardDown">
                      <Button variant="dark" className="BtnCard0" href={gameCard.game_url} target="_blank"><a target="_blank" rel="noreferrer"><i className="fab fa-download"><FiDownload /></i></a></Button>
                    </div>
                    <div className="BtnCardinfo">
                      <Button variant="outline-secondary" className="BtnCard0" onMouseOver={() => { handleShowInfo(gameCard) }} >info</Button>{' '}
                      {isAuthenticated && <Button variant="outline-secondary" className="BtnCard0" onClick={(item) => handleShow(gameCard)}>🖤</Button>}
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </div>
          </Col>
        })}
      </Row>
      <div className="pagination-container">
        <ReactPaginate
          previousLabel={'<<'}
          nextLabel={'>>'}
          breakLabel={'...'}
          pageCount={Math.ceil(gamesArr.length / postsPerPage)}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}

        />
         </div>
      <GameModal showFlag={showFlag} handleClose={handleClose} cardData={clickedCard} />
      <ModalGames showFlagInfo={showFlagInfo} handlecloseInfo={handleCloseInfo} cardData={clickedCard} />
      {/* <Favorite showFlag={showFlag} handleClose={handleClose} cardData={clickedCard} /> */ }

    </div >
  );
}

export default Game;
