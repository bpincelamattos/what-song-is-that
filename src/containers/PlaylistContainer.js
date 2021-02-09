import { connect } from 'react-redux';
import Playlist from "../components/Playlist";

const mapStateToProps = (state) => {  
    return {
        playlist: state.playlist, //passing to react props the name state from redux
    }
}
export default connect(mapStateToProps)(Playlist)