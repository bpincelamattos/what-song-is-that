import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';



// import Nameform from './Nameoutput';

//import Register from './Register';

export default function Main (props) {
    
    const [show, setShow] = useState(false); //toggle the state
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true); //showModal

    const [name, setName] = useState('');
    const handleAddName = () => {
        console.log('in handleaddname function')
        props.handleClick(name);
    }

    const handleNameChange = (e) => {
        let playerName = (e.target.value);
        setName(playerName);
        console.log(playerName)
    }
   
    return (
        <>
            <h1>Main Page</h1>
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
                    <Button onClick={handleAddName}>Start!</Button>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
          
        </>
    )   
}
