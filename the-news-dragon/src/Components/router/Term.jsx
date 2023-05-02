import React from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Term = () => {
    return (
        <Container>
            <h2>Our Terms & Conditions</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium cumque id aliquam quibusdam dolores expedita praesentium libero unde, quia ipsum facere repellat deserunt consequuntur sint blanditiis provident deleniti laborum perspiciatis!</p>
            <p>Go back to <Link to='/register'>Register</Link></p>
        </Container>
    );
};

export default Term;