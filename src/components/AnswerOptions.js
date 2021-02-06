import React, {useEffect, useState } from 'react';
import './button.css'
import './answerOption.css'
import { answerOptions } from '../containers/actions';

export default function AnswerOptions (props) {
    
  const [options, setOptions] = useState([]);

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
  }, [props.song])

 const validateSelection = (isAnswer, element) => {
   console.log(element)
   if (element !== undefined) {
     if(isAnswer === true){
      element.target.className = "correct-answer";
     } 
     else {
  
       for (let i=0; i< options.length; i++){
         if (options[i].isAnswer) {
          let index = options.indexOf(options[i]);
          let x = document.getElementById(index);
          x.className ="correct-answer";
          console.log(index);
         }
       }
      element.target.className = "wrong-answer";
     }
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
    <div className="button-class">
      <button id="0" onClick={(e) => validateSelection(options[0].isAnswer, e)}>{options[0].title}</button>
      <button id="1" onClick={(e) => validateSelection(options[1].isAnswer, e)}>{options[1].title}</button>
      <button id="2" onClick={(e) => validateSelection(options[2].isAnswer, e)}>{options[2].title}</button>
      <button id="3" onClick={(e) => validateSelection(options[3].isAnswer, e)}>{options[3].title}</button>
    </div> :
    <div></div>
  );
  }