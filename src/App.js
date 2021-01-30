//import logo from './logo.svg';
import './App.css';
import Main from './components/Main';

import { Provider } from 'react-redux';
import { store } from './containers/defaults';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
