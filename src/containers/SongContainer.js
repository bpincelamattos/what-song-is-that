import { connect } from 'react-redux';
import Quiz from '../components/Quiz';

const mapStateToProps = (state) => {
    return {
        song: state.song, //passing to react props the name state from redux
        songCounter: state.songCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSetSong: (song) => {dispatch({type: "SET_CURRENT_SONG", song_playing: song})},
        onSetPlaylist: (song) => {dispatch({type: "ADD_SONG", song_played: song })}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)