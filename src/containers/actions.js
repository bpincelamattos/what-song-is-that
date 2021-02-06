// Document Action Types
export const SET_PLAYER = 'SET_PLAYER';
export const SET_CURRENT_SONG = 'SET_CURRENT_SONG';
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

export function currentSong(song) {
    return {
        type: SET_CURRENT_SONG,
        payload: {
          song
        }

    };
}

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