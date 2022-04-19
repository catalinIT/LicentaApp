import React from 'react';
import { Link } from 'react-router-dom';
import { Container } from 'semantic-ui-react';

export default function HomePage() {
    return (
        <Container style={{marginTop: '7em'}}>
            <h1>Home page</h1>
            <h3>Go to <Link to='/learningUnits'>Learning Units</Link></h3>
        </Container>
    )
}