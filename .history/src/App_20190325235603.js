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
  //binding and two way binding example
  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: 'Max', age: 28 },
        { name: event.target.value, age: 26 },
        { name: 'Jay', age: 25 }
      ]
    })
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1x solid blue',
      padding: '8px'
    };

    return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button 
        style={style}
        onClick = {() => this.switchNameHandler('Maximillian!!')}>Switch Name</button> 
        <Person 
        name = {this.state.persons[0].name}  
        age = {this.state.persons[0].age}/> 
        <Person 
        name = {this.state.persons[1].name}  
        age = {this.state.persons[1].age}
        changed = {this.nameChangedHandler}
        />
        <Person 
        name = {this.state.persons[2].name}  
        age = {this.state.persons[2].age}
        click = {this.switchNameHandler.bind(this, 'Maxie!')}>
        I love to bake!</Person> 
      </div>
      
      
    );
    //^ bind is better to avoid too much re rendering
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
