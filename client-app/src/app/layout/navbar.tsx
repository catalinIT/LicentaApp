import React from 'react';
import { Button } from 'semantic-ui-react';


export default function NavBar() {
    return (
        <div className="headerr">
            <img src="assets/logo2.jpg" alt="asta e o poza" style={{ marginRight: '10px' }} />
            <div className="header-right">
                <button className="button-84" role="button">Solve a random quiz</button>
                <button className="button-84" style={{margin: "3%"}} role="button">Display favorite sections</button>
                <button className="button-84" role="button">Try our lie detector</button>
            </div>
        </div>
    )
}