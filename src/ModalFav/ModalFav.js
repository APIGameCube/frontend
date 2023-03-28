
import "./ModalFav.css";
import Button from 'react-bootstrap/Button';
import { useEffect, useState } from "react";
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function ModalFav(props) {


    const [updateFeedback, setUpdateFeedback] = useState('');
    function handleUpdated(event) {
        setUpdateFeedback(event.target.value);
    }

    const fetchUpdate = async () => {
        await fetch(`https://backend-black-nu.vercel.app/addGame/${props.item.id}`, {

            method: 'PUT',

            body: JSON.stringify({
                title: props.item.title,
                thumbnail: props.item.thumbnail,
                genre: props.item.genre,
                platform: props.item.platform,
                publisher: props.item.publisher,
                developer: props.item.developer,
                release_date: props.item.release_date,
                short_description: props.item.short_description,
                game_url: props.item.game_url,
                comment: updateFeedback
              }),

            headers: { 'Content-type': 'application/json; charset=UTF-8', },
        })

    }
    useEffect(()=>{
        fetchUpdate();
    },)
    return (
        <>
            <Modal show={props.showFlag} onHide={props.handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{props.item.title}</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <img width='100%' src={props.item.thumbnail} alt='poster' />
                    <div>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Update Your Feedback...</Form.Label>
                            <Form.Control as="textarea" name='comment' onChange={handleUpdated} rows={3} defaultValue={props.item.comment} />
                        </Form.Group>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={props.handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => {
                        fetchUpdate()
                        props.handleClose()
                    }}>
                        Update Feedback
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
        )
    }
    export default ModalFav