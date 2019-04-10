import React, {Component} from 'react';
import Auxilliary from '../../../hoc/Auxilliary';
import classes from './Person.css';


class Person extends Component{
    render() {
    console.log('[Person.js] rendering ...');
        return (
        <Auxilliary>
            <p key = "i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>,
            <p key = "i2">{this.props.children}</p>,
            <input key ="i3" type="text" onChange={this.props.changed} value = {this.props.name}/>
        </Auxilliary>
        );
}
}
export default Person;