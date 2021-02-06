import React, { useEffect, useState } from 'react';

export default function Quiz (props) {
    
  const [currentSong, setCurrentSong] = useState();
  
  useEffect(() => {
    fetch('https://api.deezer.com/playlist/1313621735')
      .then(res => res.json())
      .then(
        (result) => {
          //setIsLoaded(true);
          const arrayPlaylist = result.tracks.data;
          const randomTrack = arrayPlaylist[Math.floor(Math.random() * arrayPlaylist.length)];
          let track = {};
          track.source = randomTrack.preview;
          track.title = randomTrack.title;
          track.isAnswer = true;

          let arraySong = [];
          arraySong.push(track)
          console.log(arraySong);
          setCurrentSong(arraySong);
        },
      )
  }, [])

  props.onSetSong(currentSong);  
       
  return (
    <>
    <audio src={currentSong ? currentSong[0].source : ""} controls="controls" autoPlay></audio>
    <button onClick={""}>Play</button>
    </>
  );
  }



       
