import defaultState from "../store/defaults";
import { 
    SET_PLAYER,
    SET_CURRENT_SONG,
    INCREMENT_POINT,
    INCREMENT_SONG_COUNTER,
    ADD_SONG
 } from "../actions/actions";

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
        case INCREMENT_POINT:
            return {
                ...state,
                points: state.points + 10
            }
        case INCREMENT_SONG_COUNTER:
            return {
                ...state,
                songCounter: state.songCounter + 1
            }
        case ADD_SONG:
            return {
                ...state,
                playlist: [...state.playlist, action.song_played]
            }
        default:
            return state;
     }
 }