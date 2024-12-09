import React from 'react';
import { Link } from 'react-router';
//import {makeNumButtons} from './helpers';

function Instructions() {
    return (
        <section id="instructions-container">
            <h2>Match the number pattern!</h2>
            <p>Press the buttons to match the number sequence in the box below. Be quick--you have 5 seconds!</p>
            <Link to="/play">Start!</Link>
        </section>
    );
};

export default Instructions;