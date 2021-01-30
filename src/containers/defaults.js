import { createStore, combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import { quizReducer } from './reducer'

const defaultState = {
    player: '',
    // song: '',
    // points: 0,
    // playlist: []
}

// const reducer = combineReducers({
//     form: reduxFormReducer, // mounted under "form"
//     //quizReducer: quizReducer
//   });

export const store = createStore(quizReducer, defaultState);

store.subscribe(() => {
    console.log('state has updated');
    const state = store.getState();
    console.log(state);
});
export default defaultState;
