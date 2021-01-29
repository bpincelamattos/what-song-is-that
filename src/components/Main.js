import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form'

//import Register from './Register';

export default function Main (props) {
    const [show, setShow] = useState(false); //toggle the state

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); //showModal
    
    return (
        <>
            <h1>Main Page</h1>
            <Button variant="primary" onClick={handleShow}>
                Start Game
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                 <Modal.Title>What song is this?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Insert Nickname:</Form.Label>
                    <Form.Control type="text" placeholder="nickname" />
                </Form.Group>
                </Modal.Body>
                
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Start Game
                    </Button>
                </Modal.Footer>
            </Modal>
          
        </>
    )
}