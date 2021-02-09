import './App.css';
import Quiz from './containers/SongContainer';
import Main from './containers/NameContainer';
import Header from './components/Header';


function App(props) {

  console.log(props.player)
  return (
    <>
      <Header />
      <Main />
      <Quiz />
      {/* { props.player ? <Quiz />  : <div>Lets Start?</div> } */}
    </>
  );
}

export default App;
