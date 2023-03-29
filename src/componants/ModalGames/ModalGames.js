import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import './ModalGames.css';

function ModalGames(props) {


  const insertMovie = async (e) => {
    try {
      e.preventDefault();
      const obj = {
        title: props.gameCard.title
      }
      const serverURl = `https://backend-black-nu.vercel.app/allGame`;
      const resData = await fetch(serverURl);
    const data = await resData.json();

    }
    catch (err) {

    }
  }

  return (
    
    <Modal show={props.showFlagInfo} onHide={props.handlecloseInfo} onMouseLeave={props.handlecloseInfo}>
      <Modal.Header  closeButton>
        <Modal.Title>{props.gameCard.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className='cardIMG'><Image src={props.gameCard.thumbnail} width='100%' />
        <div className='cardP'>
        <p>Date: {props.gameCard.release_date}</p>
        <p>Genre: {props.gameCard.genre}</p>
        <p>You can only play it on the: {props.gameCard.platform}</p>
        </div>
        </div>
        <p>{props.gameCard.short_description}</p>

        <Form onSubmit={insertMovie}>
          <Form.Group className="mb-3" controlId="formBasicPassword">
          </Form.Group>
          <Button variant="primary" onClick={props.handlecloseInfo} href={props.gameCard.freetogame_profile_url} target="_blank">
            Read More
          </Button>
        </Form>

      </Modal.Body>
    </Modal>
  );
}

export default ModalGames;