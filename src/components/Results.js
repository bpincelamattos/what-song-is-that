import React from 'react';
import Playlist from '../containers/PlaylistContainer';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button'



export default function Results (props) {

    let result = "";

        if (props.points >= 70){
            result =  <div className="text-good-result">
                        <h4>You are super tuned - Good Job</h4>
                        <img className="gif-result" alt="congratulations gif" src="https://media.giphy.com/media/fxsqOYnIMEefC/giphy.gif"></img>
                    </div>
        } else if (props.points >=40) {
            result = <div className="text-average-result">
                        <h4>That's Ok - Keep tuned to get better</h4>
                        <img className="gif-result" alt="average gif" src="https://media.giphy.com/media/l0Iy0QMOGQmoWntpm/giphy.gif"></img>
                    </div>
        } else {
            result = <div className="text-bad-result">
                        <h4>Not tuned at all - Go back and Play again</h4>
                        <img className="gif-result" alt="disappointed gif" src="https://media.giphy.com/media/k6r9JvHp1r714BTj5Z/giphy.gif"></img>
                    </div>
        }

    return (
        <>
            <Col>
            <div className='result-container'>
                <h2 className="font"><span>RESULT: </span>{props.points} Points</h2>  
                {result}
            </div>
            <div>
                <Button className="start-again-button" onClick={() => window.location.reload(false)}>Start Again</Button>
            </div>
            </Col>
            <Playlist /> 
                      
            
        </>
    )
}