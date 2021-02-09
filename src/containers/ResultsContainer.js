import { connect } from 'react-redux';
import Results from "../components/Results";

const mapStateToProps = (state) => {
    return {
        points: state.points, //passing to react props the name state from redux
    }
}

export default connect(mapStateToProps)(Results)