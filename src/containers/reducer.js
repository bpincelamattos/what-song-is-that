//import { combineReducers } from 'redux';
import defaultState from "./defaults";
import { 
    SET_PLAYER,
    SET_CURRENT_SONG,
    // INCREMENT_POINT,
    // ADD_SONG
 } from "./actions";


 export function quizReducer (state=defaultState, action) {
     switch(action.type){
        case SET_PLAYER:
            return {
                ...state,
                player: action.playerName
            }
        case SET_CURRENT_SONG:
            return {
                ...state,
                song: action.song_playing
            }
        // case INCREMENT_POINT:
        //     return {
        //     points: action.payload.points + 1
        //     }
        // case ADD_SONG:
        //     return {
        //         playlist: action.payload.playlist.push(song)
        //     }
        default:
            return state;
     }
 }