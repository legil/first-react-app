import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Steph', age: 28 },
      { name : 'Jay', age: 23 }
    ],
    otherState: 'some other value'
  }

  switchNameHandler = (newName) => {
    //console.log('was clicked!');
    //DONT DO: this.state.persons[0].name = 'Arnold'
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Stef', age: 26 },
        { name: 'Jay', age: 25 }
      ]
    })
  }

  render() {
    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick = {() => this.switchNameHandler('Maximillian!!')}>Switch Name</button>
        <Person 
        name = {this.state.persons[0].name}  
        age = {this.state.persons[0].age}/> 
        <Person 
        name = {this.state.persons[1].name}  
        age = {this.state.persons[1].age}
        click = {this.switchNameHandler.bind(this, 'Maxie!')}/> 
        <Person 
        name = {this.state.persons[2].name}  
        age = {this.state.persons[2].age}>
        I love to bake!</Person> 
      </div>
      
      
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
