import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './Css/main.css'

export default function Main (props) {
    
    const [show, setShow] = useState(false); //toggle the state
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); //showModal

    const [name, setName] = useState('');

    const handleNameClick = () => {
        props.onAdd(name);
        handleClose();
    }

    const handleNameChange = (event) => {
        let name = (event.target.value);
        setName(name);
        console.log(name)
    }
   
    return (
        <div className="container">
            <h1 className="text-main">Welcome, {props.player ? props.player : "Friend"}</h1>
            <Button className="button-modal"  variant="warning" onClick={handleShow}>
                Who Are You?
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                 <Modal.Title className="text-main">Lets Start?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label className="text-main">Player Name :</label>
                    <input type="text" onChange={handleNameChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="outline-primary" onClick={handleNameClick}>Start!</Button>
                    <Button variant="outline-secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </ div>
    )   
}
