//import { combineReducers } from 'redux';
import defaultState from "./defaults";
import { 
    SET_PLAYER,
    // NEXT_SONG,
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
        // case NEXT_SONG:
        //     return {
        //         ...state.player,
        //         song: action.payload.song
        //     }
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