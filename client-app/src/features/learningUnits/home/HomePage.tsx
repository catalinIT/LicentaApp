import { observer } from 'mobx-react-lite';
import React from 'react';
import { Row } from 'react-grid-system';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';
import { useStore } from '../../../app/stores/store';
import LoginForm from '../../users/LoginForm';
import RegisterForm from '../../users/RegisterForm';

export default observer(function HomePage() {

    const { modalStore } = useStore();

    return (
        <div className='homeBackground'>
            <Segment textAlign='center' vertical className='homeBackground'>
                <Container text>
                    <Header className='detailsHeaderHomePage' as='h1' inverted>
                        Lasso of truth
                    </Header>
                    {window.localStorage.getItem("jwt") ? (
                        <>
                            <Header as='h2' className='homePageSubtitle' content='Here you become an expert liespotter in no time!' />
                            <Button className='button-59' as={Link} to='/learningUnits' size='huge' inverted>
                                Start learning!
                            </Button>
                        </>
                    ) : (
                        <div className='groupCenterInlineButton'>
                                <Button onClick={() => modalStore.openModal(<LoginForm />)} className='button-59' size='huge' inverted>
                                    Login!
                                </Button>
                                <Button onClick={() => modalStore.openModal(<RegisterForm />)} className='button-59' size='huge' inverted>
                                    Register!
                                </Button>
                        </div>
                    )}
                </Container>
            </Segment>
        </div>
    )
})