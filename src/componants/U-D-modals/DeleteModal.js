import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';
import Image from 'react-bootstrap/Image';





function DeleteModal(props) {
  const deleteGame = async (e) => {

    e.preventDefault();
    const serverURL = `https://backend-production-8a11.up.railway.app/addGame/${props.item.id}`;
    const axiosRes = await axios.delete(serverURL);
    props.closeDeleteModal();
    props.takeNewArrFromChild(axiosRes.data);
    
  }

  return (
    <Modal show={props.deleteFlag} onHide={props.closeDeleteModal}>
      <Modal.Header closeButton>
        <Modal.Title>{props.item.title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={deleteGame}>
          <Image src={props.item.thumbnail} width='100%'></Image>
        </Form>

      </Modal.Body>
      <Modal.Footer>
        <Button calssName="Delete-btn" variant="Danger" type="submit" onClick={deleteGame}>
          Delete this game
        </Button>
        <Button variant="secondary" onClick={props.closeDeleteModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default DeleteModal;