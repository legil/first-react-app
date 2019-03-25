import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <Person name = 'Max'  age = '26'/> 
        <Person name = 'Stef' age ='28'/> 
        <Person name = 'Jay' age = '23'>I love to bake!</Person> 
      </div>
      
      
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
