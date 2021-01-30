import Main from '../components/Main';
import { connect } from 'react-redux';
import { setPlayer } from './actions';

const mapDispatchToProps = (dispatch) => {
    return {
        handleClick: (name) => dispatch(setPlayer(name))
    }
}
export default connect(null, mapDispatchToProps)(Main)