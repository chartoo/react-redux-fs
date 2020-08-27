import React from 'react';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer.jsx'; 
import {Provider} from 'react-redux';
import store from './components/redux/store/index'
function App() {
  return (
   <Provider store={store}>
      <div className="App">
     <CakeContainer/>
    </div>
   </Provider>
  );
}

export default App;
