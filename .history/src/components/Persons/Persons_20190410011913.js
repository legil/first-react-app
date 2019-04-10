import React, {Component} from 'react';
import Person from './Person/Person';

class Persons extends Component{
        static getDerivedStateFromProps(props, state){
                console.log('[Persons.js] getDerivedStateFromProps');
                return state;
        }

        //componentWillMount() -- legacy, shouldn't be used anymore but exist in older apps

        /* componentWillRecieveProps(props){
                console.log('[Persons.js] componentWillRecieveProps', props);
        } */



        shouldComponentUpdate(nextProps, nextState) {
                console.log('[Persons.js] shouldComponentUpdate');
                return true;
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
                console.log('[Persons.js getSnapshotBeforeUpdate');
                return {message: 'Snapshot!'};
        }

       /*  componentWillUpdate(){

        } */

        componentDidUpdate(prevProps, prevState, snapshot){
                console.log('[Persons.js] componentDidUpdate');
                console.log(snapshot); 
        }

        componentWillUnmount(){
                //any code to run before component is removed goes here
                console.log('[Persons.js] componentWillUnmount');
        }

        render() {
                 console.log('[Persons.js] rendering...');
                 return this.props.persons.map((person, index) => {
                        return (
                                <Person 
                                click = {() => this.props.clicked(index)}
                                name = {person.name}
                                age = {person.age}
                                key = {person.id}
                                changed = {(event) => this.props.changed(event, person.id)}/>
                        ); 
                });
        }     
}



export default Persons;