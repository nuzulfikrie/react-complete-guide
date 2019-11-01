import React, { Component } from 'react';
//Fragment

import Aux from '../../../hoc/Aux';
import './Person.css';

class Person extends Component {
    render(){
        console.log('[Person.js] rendering...');
        return (
            <WithClass>
            
                <p onClick={this.props.click}>I'm {this.props.name} and i'm {this.props.age} years old!</p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name}/>
            
            </WithClass>
        );
    }
}

export default Person;