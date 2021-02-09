import { createStore } from 'redux';
import { quizReducer } from '../reducers/reducer'

const defaultState = {
    player: '',
    song: {},
    points: 0,
    songCounter: 1,
    playlist: []
}

export const store = createStore(quizReducer, defaultState);

store.subscribe(() => {
    console.log('state has updated');
    const state = store.getState();
    console.log(state);
});
export default defaultState;
