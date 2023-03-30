import { React, useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { TextField } from "@mui/material";
import { Col, Row, Card, Button } from "react-bootstrap";
import { FiDownload } from "react-icons/fi";
import { useAuth0 } from '@auth0/auth0-react';
import SecondNavbar from "../SecondNavbar/SecondNavbar";
// import './Shooter.css'
import GameModal from "../../GameModal/GameModal";
import ModalGames from "../../ModalGames/ModalGames";
import ThirdNavbar from "./ThirdNavbar";


function Shooter() {

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

  const gamesComponentesReq = async () => {
    const serverURL = `https://backend-production-8a11.up.railway.app/shooter`;
    const resData = await fetch(serverURL);
    const data = await resData.json();
    setGamesArr(data)
  }


  useEffect(() => {
    gamesComponentesReq();
  }, [])
  //.........

  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (

    <div className="main">
      <div className="backgroundImg">
        
      <ThirdNavbar />

        {/* <List /> */}

      </div>
      <Row xs={1} md={4} className="g-4">
        {gamesArr.map((gameCard) => {
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
                      <Button variant="outline-secondary" className="BtnCard0" onMouseOver={() => { handleShowInfo(gameCard) }} >More</Button>{' '}
                      {isAuthenticated && <Button variant="outline-secondary" className="BtnCard0" onClick={(item) => handleShow(gameCard)}>🖤</Button>}
                    </div>
                  </div>

                </Card.Body>
              </Card>
            </div>
          </Col>
        })}
      </Row>
      <GameModal showFlag={showFlag} handleClose={handleClose} cardData={clickedCard} />
      <ModalGames showFlagInfo={showFlagInfo} handlecloseInfo={handleCloseInfo} gameCard={clickedCard} />
    </div>
  );
}

export default Shooter;
