import React, { useEffect } from 'react';

import './Cockpit.css';

const cockpit = (props) => {

    useEffect( () => {
        console.log('[Cockpit.js] useEffect');
        setTimeout(() => {
            //alert('Get data from the cloud.');
        },1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect');
        };
    }, []); // [] = only first time else eg [props.persons]

    useEffect( () => {
        console.log('[Cockpit.js] 2nd useEffect');
        return () => {
            console.log('[Cockpit.js] cleanup work in 2nd useEffect');
        };
    }, []); // [] = only first time else eg [props.persons]
    
    //let classes = ['button', 'active'].join(' ');
    let classes = [];
    
    if(props.showPersons) {
      classes.push('active');
    }
    
    return (
        <div className="Cockpit">
            <h1>{props.title}</h1>
            <p>This is really working!</p>
            <button 
                className={classes.join(' ')}
                onClick={props.clicked}>Toogle Persons
            </button>
        </div>
    )
        
}

export default React.memo(cockpit);