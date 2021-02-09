import AnswerOptions from '../components/AnswerOptions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    return {
        song: state.song, //passing to react props the name state from redux store
        songCounter: state.songCounter
    }
}

const mapDispatchToProps = (dispatch) => {
    return{
        onIncrement: () =>{ dispatch({type: 'INCREMENT_POINT'}) },
        onIncrementSongCounter: () => { dispatch ({ type: "INCREMENT_SONG_COUNTER"})},
        onSetPlaylist: (song) => {dispatch({type: "ADD_SONG", song_played: song })}
    }

}
export default connect(mapStateToProps, mapDispatchToProps)(AnswerOptions)