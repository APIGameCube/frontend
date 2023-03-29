import "./GameModal.css"
import Button from 'react-bootstrap/Button';
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal'
import "../GameModal/GameModal.css"
function GameModal(props) {

  const [addFeedBack, setAddComment] = useState('');
  function handleCommment(event) {
    setAddComment(event.target.value);
  }

  const fetchRes = async () => {
    await fetch('https://backend-production-8a11.up.railway.app/addGame', {

      method: 'POST',

      body: JSON.stringify({
        title: props.gameCard.title,
        thumbnail: props.gameCard.thumbnail,
        genre: props.gameCard.genre,
        platform: props.gameCard.platform,
        publisher: props.gameCard.publisher,
        developer: props.gameCard.developer,
        release_date: props.gameCard.release_date,
        short_description: props.gameCard.short_description,
        game_url: props.gameCard.game_url,
        comment: addFeedBack
      }),
      headers: { 'Content-type': 'application/json; charset=UTF-8', },
    })

  }
  return (
    <>
      <Modal show={props.showFlag} onHide={props.handleClose}>
        <Modal.Header className="favmodhead" closeButton>
          <Modal.Title className="titlefavhead">{props.gameCard.title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className="favmodbody">
          <img width='100%' className="favmodimg" src={`${props.gameCard.thumbnail}`} alt='poster' />
          <div>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
              <Form.Label className="addcomment">Add a comment...</Form.Label>
              <Form.Control as="textarea" onChange={handleCommment} rows={3} />
            </Form.Group>
          </div>
        </Modal.Body>
        <Modal.Footer className="favmodfooter">
          <Button className="closefavmod" variant="secondary" onClick={props.handleClose}>
            Close
          </Button>
          <Button className="addcommentfavmod" variant="primary" onClick={() => {
            console.log(`${props.gameCard.title}`)
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
