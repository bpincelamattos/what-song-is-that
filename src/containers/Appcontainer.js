import { connect } from 'react-redux';
import App from "../App";

const mapStateToProps = (state) => {
    console.log(state.player)
    return {
        player: state.player //passing to react props the name state from redux
    }
}

export default connect(mapStateToProps)(App)