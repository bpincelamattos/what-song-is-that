import Main from '../components/Main';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("inside mapStateToProps")
    return {
        player: state.player //passing to react props the name state from redux
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        onAdd: (name) => dispatch(dispatch({type: "SET_PLAYER", playerName: name}))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Main)