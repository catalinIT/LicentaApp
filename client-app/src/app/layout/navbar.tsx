import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';


export default function NavBar() {
    return (
        <div className="headerr">
            <a href="/"><img src="assets/logo2.jpg"  style={{ marginRight: '10px' }} /></a>
            <div className="header-right">
                <Button className="button-84" as={NavLink} to='/randomQuiz' role="button">Solve a random quiz</Button>
                <Button className="button-84" as={NavLink} style={{margin: "3%"}} to='/learningUnits' role="button">Learning Units</Button>
                <Button className="button-84" as={NavLink} to='/lieDetector' role="button">Try our lie detector</Button>
            </div>
        </div>
    )
}