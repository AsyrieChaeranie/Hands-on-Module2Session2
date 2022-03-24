import logo from './logo.svg';
import './App.css';

import Button from './components/Button';
import Search from './components/Search';
import Gif from './components/Gif';
import { Component } from 'react';

//function App() {
//  const kelas = "KM4";
//  const baik = "baik1";
//
//  <img src={logo} className="App-logo" alt="logo" />
//
//  return (
//    <div className="App">
//      <div>
//        <input/>
//        <button/>
//      </div>
//
//      <div>
//        <img src="https://media.giphy.com/media/Vh8pbGX3SGRwFDh3V0/source.gif"></img>
//      </div>
//    </div>
//  );
//}

class App extends Component{
  render(){
    return(
      <div className='App'>
        
        <Gif/>
      </div>
    )
  }
}

export default App;