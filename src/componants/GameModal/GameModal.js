import "./GameModal.css"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
function GameModal(props) {

  const [addFeedBack, setAddComment] = useState('');
  function handleCommment(event) {
    setAddComment(event.target.value);
  }

  const fetchRes = async () => {
    await fetch('https://backend-black-nu.vercel.app/addGame', {

      method: 'POST',

      body: JSON.stringify({
        title: props.cardData.title,
        thumbnail: props.cardData.thumbnail,
        genre: props.cardData.genre,
        platform: props.cardData.platform,
        publisher: props.cardData.publisher,
        developer: props.cardData.developer,
        release_date: props.cardData.release_date,
        short_description: props.cardData.short_description,
        game_url: props.cardData.game_url,
        comment: addFeedBack
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })

  }
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{props.cardData.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <img width='100%' src={`${props.cardData.thumbnail}`} alt='poster' />
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label>Add a comment...</Form.Label>
              <Form.Control as="textarea" onChange={handleCommment} rows={3} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={() => {
            console.log(`${props.cardData.title}`)
            fetchRes()
            props.handleClose()
          }}>
            Add comment
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default GameModal;
