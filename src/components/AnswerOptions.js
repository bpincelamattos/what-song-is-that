import React, {useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button'
import './Css/button.css'
import './Css/answerOption.css'


export default function AnswerOptions (props) {
    
  const [options, setOptions] = useState([]);

  const [playlist, setPlaylist] = useState();

  useEffect(() => {
      fetch('https://api.deezer.com/playlist/1313621735')
      .then(res => res.json())
      .then(
        (result) => {
          const arrayPlaylist = result.tracks.data;
          let randomOptions = [];
  
          for(let i=0; i<=2; i++){
  
            let option = {};
            option.title = arrayPlaylist[Math.floor(Math.random() * arrayPlaylist.length)].title;
            option.source = arrayPlaylist[Math.floor(Math.random() * arrayPlaylist.length)].preview;
            option.isAnswer = false;
  
            randomOptions.push(option);
          }
          if(props.song){
            randomOptions.push(props.song[0])
          }
          setOptions(randomOptions)  
        }
      )
      if(props.song !== undefined){
        setPlaylist(props.song[0]) 
        props.onSetPlaylist(playlist)
        
      }; 

  }, [props.song])  // eslint-disable-line react-hooks/exhaustive-deps

  const validateSelection = (isAnswer, element) => {
    if (element !== undefined) {
      if(isAnswer === true){
        element.target.className = "button correct-answer";
        props.onIncrement();
      } 
      else {
        for (let i=0; i< options.length; i++){
          if (options[i].isAnswer) {
            let index = options.indexOf(options[i]);
            let rightAnswer = document.getElementById(index);
            rightAnswer.className = "button correct-answer";
          }
        } 
        element.target.className = "button wrong-answer";
      }
    }
  }

  const cleanAnswerColor = () => {
    for(let i=0; i<options.length; i++){
      let option = document.getElementById(i);
      if(option != null){
        option.className = "button each-button";
      }
    }
  }  

  const _increment = () => {
    console.log(props.songCounter)
    if(props.songCounter <= 8 ){
      props.onIncrementSongCounter(); 
    }
    else {
      document.getElementById("next").style.display = "none";
      document.getElementById('results').style.display = 'block';
    }
  }
 
  //shuffle options 
  var j, x, i;
  for (i = options.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1)); 
      x = options[i];
      options[i] = options[j];
      options[j] = x;
  }

  return (
    options.length === 4 ? 
    <div>
      <div className="button-class">
        <h4>What Song is That?</h4>
        <button className="button each-button" id="0" onClick={(e) => validateSelection(options[0].isAnswer, e)}>{options[0].title}</button>
        <button className="button each-button" id="1" onClick={(e) => validateSelection(options[1].isAnswer, e)}>{options[1].title}</button>
        <button className="button each-button" id="2" onClick={(e) => validateSelection(options[2].isAnswer, e)}>{options[2].title}</button>
        <button className="button each-button" id="3" onClick={(e) => validateSelection(options[3].isAnswer, e)}>{options[3].title}</button>
      </div>
      <div><Button id="next" variant="info" size="lg"
        onClick={() => { 
          cleanAnswerColor();
          _increment();
          props.fetchSong();    
      }}>Next</Button>
      <Button id="results" style={{display: "none"}}>Results</Button>
      </div>

    </div>   
    :
    <div></div>
  );
  }