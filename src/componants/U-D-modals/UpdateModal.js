import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import axios from 'axios';



function UpdateModal(props) {

    const updateGame = async (e) => {
        e.preventDefault();
        const obj = {
            title: e.target.title.value,
            comment: e.target.comment.value,
        }
   
        const serverURL = `https://backend-production-8a11.up.railway.app/addGame/${props.item.id}`;
        const axiosRes = await axios.put(serverURL, obj);
        console.log(axiosRes.data);
        props.closeUpdateModal();
        console.log(obj);
        //update old favorite arr
        props.takeNewArrFromChild(axiosRes.data);

    }


    return (
        <Modal show={props.updateFlag} onHide={props.closeUpdateModal} className='nawrs'>
            <Modal.Header closeButton>
                <Modal.Title>{props.item.title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={updateGame}>
                  
                    <Form.Group className="mb-3" >
                        <Form.Label>comment</Form.Label>
                        <Form.Control name='comment' type="text" placeholder="add a new comment" defaultValue={props.item.comment} />
                        
                    </Form.Group>

                    <Button variant="primary" type="submit" >
                        Submit
                    </Button>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.closeUpdateModal}>
                    Close
                </Button>
            </Modal.Footer>
        </Modal>
    )
}
export default UpdateModal;