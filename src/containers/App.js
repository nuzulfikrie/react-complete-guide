import React, { Component } from 'react';
import './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {
  
  constructor(props) {
    super(props);
    console.log('[App.js] contructor');
  }

  state = {
    persons: [
      { id: 'ee', name: 'Max', age: 18 },
      { id: '44', name: 'Daan', age: 13 },
      { id: 'fff', name: 'Stepanie', age: 26 }
    ],
    otherState: 'Some other value',
    showPersons: false,
    showCockpit: true
  }

  static getDerivedStateFromProps(props, state){
    console.log('[App.js] getDerivedFromProps', props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState){
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  componentDidMount(){
    console.log('[App.js] componentDidMount')
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons});
  }

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow});
  }

  render() {
    console.log('[App.js] render');
    let persons = null;

    if(this.state.showPersons) {
      persons = (
            <Persons 
              persons = {this.state.persons}
              clicked = {this.deletePersonHandler}
              changed = {this.nameChangedHandler} />
      );
    }

    

    return (
      <div className="App">
        <button 
          onClick={() => {
            this.setState({ showCockpit: false });
          }}
        >
          Remove Cockpit
        </button>
        {this.state.showCockpit ? (
        <Cockpit 
          title={this.props.appTitle}
          showPersons={this.state.showPersons}
          persons={this.state.persons} 
          clicked={this.togglePersonsHandler} />
         ) : null}
        {persons} 
      </div>
    )
  }
}

export default App;
