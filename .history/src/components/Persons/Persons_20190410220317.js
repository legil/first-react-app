import React, { PureComponent } from 'react';
import Person from './Person/Person';
import AuthContext from '../../context/auth-context';

class Persons extends PureComponent{
        static getDerivedStateFromProps(props, state){
                console.log('[Persons.js] getDerivedStateFromProps');
                return state;
        }

        //componentWillMount() -- legacy, shouldn't be used anymore but exist in older apps

        /* componentWillRecieveProps(props){
                console.log('[Persons.js] componentWillRecieveProps', props);
        } */



       /*  shouldComponentUpdate(nextProps, nextState) {
                console.log('[Persons.js] shouldComponentUpdate');
                if(nextProps.persons !== this.props.persons ||
                   nextProps.changed !== this.props.changed ||
                   nextProps.clicked !== this.props.clicked ){
                      return true;  
                }
                else {
                        return false;
                }
        } */

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
                 return <AuthContext.Consumer>
                 this.props.persons.map((person, index) => {
                        return (
                                <Person 
                                click = {() => this.props.clicked(index)}
                                name = {person.name}
                                age = {person.age}
                                key = {person.id}
                                changed = {(event) => this.props.changed(event, person.id)}
                                isAuth = {this.props.isAuthenticated} />
                        ); 
                })}
                </AuthContext.Consumer>
        }     
}



export default Persons;