//import logo from './logo.svg';
import './App.css';
import Quiz from './containers/SongContainer';
import Main from './containers/NameContainer';
import AnswerOptions from './containers/AnswerContainer';
//import {  BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <>
      <Main />
      <Quiz />
      <AnswerOptions/>
    </>
  );
}

export default App;
