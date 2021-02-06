import { connect } from 'react-redux';
import Quiz from '../components/Quiz';

const mapStateToProps = (state) => {
    console.log("inside mapStateToProps SongContainer")
    return {
        song: state.currentSong //passing to react props the name state from redux
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onSetSong: (song) => {
            dispatch(dispatch({type: "SET_CURRENT_SONG", song_playing: song}))}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Quiz)