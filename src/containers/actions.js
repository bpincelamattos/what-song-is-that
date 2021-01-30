// Document Action Types
export const SET_PLAYER = 'SET_PLAYER';
export const NEXT_SONG = 'NEXT_SONG';
export const INCREMENT_POINT = 'INCREMENT_POINT';
export const ADD_SONG = 'ADD_SONG';

export function setPlayer(name) {
    return {
      type: SET_PLAYER,
      payload: {
        player: name
      } 
    };
  }

// export function nextSong(song) {
//     return {
//         type: NEXT_SONG,
//         payload: song
//     };
// }

// export function incrementPoint(points) {
//     return {
//         type: INCREMENT_POINT,
//         payload: points
//     }
// }

// export function addSong (song) {
//     return{
//         type: ADD_SONG,
//         payload: song
//     }
// }