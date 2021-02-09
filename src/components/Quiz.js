import React, { useEffect, useState } from 'react';
import AnswerOptions from '../containers/AnswerContainer';
import Results from "../containers/ResultsContainer";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Css/quiz.css';

export default function Quiz (props) {
    
  const [currentSong, setCurrentSong] = useState();

  useEffect(() => {
    _fetchSong();
  }, [])

  const _fetchSong = () =>{
      fetch('https://api.deezer.com/playlist/1313621735')
      .then(res => res.json())
      .then(
        (result) => {
          const arrayPlaylist = result.tracks.data;
          const randomTrack = arrayPlaylist[Math.floor(Math.random() * arrayPlaylist.length)];
          let track = {};
          track.source = randomTrack.preview;
          track.title = randomTrack.title;
          track.artist = randomTrack.artist.name;
          track.isAnswer = true;

          let arraySong = [];
          arraySong.push(track)
          setCurrentSong(arraySong);
        },
      )
  }

  props.onSetSong(currentSong);  

  return (
    <Container className="container">
      <Row>
        <Col>
        <img className="gif" alt="person listening to music" src="https://media.giphy.com/media/eMh8Os1QtL3zZM6ECN/giphy.gif"></img>        
        <audio id="player" src={currentSong ? currentSong[0].source : ""} controls="controls" autoPlay /> 
        </Col>
        { props.songCounter === 8 ? <Results /> :<Col> <AnswerOptions fetchSong={_fetchSong} /></Col> }
      </Row>
    </Container>
  );
}