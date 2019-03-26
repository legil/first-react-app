import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props =>{ 
  const [ personsState, setPersonsState] = useState({
    persons: [
      { name: 'Max', age: 26 },
      { name: 'Steph', age: 28 },
      { name : 'Jay', age: 23 }
    ],
    otherState: 'some other value'
  });

  console.log(personsState);

    const switchNameHandler = () => {
    //console.log('was clicked!');
    //DONT DO: this.state.persons[0].name = 'Arnold'
    setPersonsState({
      persons: [
        { name: 'Arnold', age: 28 },
        { name: 'Stef', age: 26 },
        { name: 'Jay', age: 25 }
      ],
      otherState: personsState.otherState
    });
  };
  
  return (
      <div className="App">
        <h1> Hi, I'm a React App</h1>
        <p> This is really working!</p>
        <button onClick = {switchNameHandler}>Switch Name</button>
        <Person name = {personsState.persons[0].name}  age = {personsState.persons[0].age}/> 
        <Person name = {personsState.persons[1].name}  age = {personsState.persons[1].age}/> 
        <Person name = {personsState.persons[2].name}  age = {personsState.persons[2].age}>I love to bake!</Person> 
      </div>
    );
   // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }

export default app;



