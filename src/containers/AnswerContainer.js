import AnswerOptions from '../components/AnswerOptions';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
    console.log("inside mapStateToProps AnswerContainer", state)
    return {
        song: state.song //passing to react props the name state from redux
    }
}
export default connect(mapStateToProps)(AnswerOptions)