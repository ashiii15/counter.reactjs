import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import { Component } from 'react';
import React,{component} from 'react';
import Welcome1 from './components/Welcome1';
import Message from './components/Message';
import Counter from './components/Counter';

class App extends Component{
  render(){
    return (
      <div className='App'>
        <Counter/>
        {/* <Greet name="wane" superheroName = "batman"><p>He is good person</p></Greet>
        <Greet name="asamdl" superheroName = "superman"></Greet>
        <Greet name="adafl" superheroName = "wonderwoman"></Greet>
        <Welcome1></Welcome1> */}
        {/* <Message></Message> */}
      </div>
    )
  }
}

export default App;
