// Document Action Types
export const SET_PLAYER = 'SET_PLAYER';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
export const INCREMENT_POINT = 'INCREMENT_POINT';
export const INCREMENT_SONG_COUNTER = "INCREMENT_SONG_COUNTER";
export const ADD_SONG = 'ADD_SONG';

export function setPlayer(name) {
    return {
      type: SET_PLAYER,
      payload: {
        player: name
      } 
    };
  }

export function currentSong(song) {
    return {
        type: SET_CURRENT_SONG,
        payload: {
          song
        }
    };
}

export function incrementPoint() {
    return {
        type: INCREMENT_POINT
    }
}

export function incrementSongCounter() {
  return {
      type: INCREMENT_SONG_COUNTER
  }
}

export function addSong (song) {
    return{
        type: ADD_SONG,
        payload: song
    }
}