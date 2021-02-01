import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

// import Nameform from './Nameoutput';

export default function Main (props) {
    
    const [show, setShow] = useState(false); //toggle the state
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); //showModal

    const [name, setName] = useState('');

    const handleNameClick = () => {
        console.log('in handleNameClick function')
        props.onAdd(name);
        handleClose();
    }

    const handleNameChange = (event) => {
        let name = (event.target.value);
        setName(name);
        console.log(name)
    }
   
    return (
        <>
            <h1>Main Page</h1>
            <h1>Welcome : {props.player}</h1>
            <Button variant="primary" onClick={handleShow}>
                Start Game
            </Button>
            <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                 <Modal.Title>Lets Start?</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <label >Player Name </label>
                    <input type="text" onChange={handleNameChange} />
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={handleNameClick}>Start!</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
          
        </>
    )   
}
