import { observer } from 'mobx-react-lite';
import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button } from 'semantic-ui-react';
import { useStore } from '../stores/store';


export default observer(function NavBar() {
    const { userStore } = useStore();
    const { user, logout } = userStore;

    return (
        <div className="headerr">
            <a href="/"><img src="assets/logo2.jpg" style={{ marginRight: '10px' }} /></a>
            <div className="header-right">
                <Button className="button-84" as={NavLink} style={{ margin: "3%" }} to='/randomQuiz' role="button">Solve a random quiz</Button>
                <Button className="button-84" as={NavLink} to='/learningUnits' role="button">Learning Units</Button>
                <Button className="button-84" as={NavLink} style={{ margin: "3%" }} to='/lieDetector' role="button">Try our lie detector</Button>
                <Button className="button-84" onClick={logout} text='Logout' icon='power'>Logout</Button>
            </div>
        </div>
    )
})