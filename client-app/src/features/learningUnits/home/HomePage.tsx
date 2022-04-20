import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Header, Image, Segment } from 'semantic-ui-react';

export default function HomePage() {

    const style =  {
        'margin-left': '5px',
        'margin-right': '5px'
    }

    return (
        <div className='homeBackground'>
            <Segment textAlign='center' vertical className='homeBackground'>
                <Container text>
                    <Header className='detailsHeaderHomePage' as='h1' inverted>
                        Lasso of truth
                    </Header>
                    <Header as='h2' className='homePageSubtitle' content='Here you become an expert liespotter in no time!' />
                    <Button className='button-59' as={Link} to='/learningUnits' size='huge' inverted>
                        Let's start!
                    </Button>
                </Container>
            </Segment>
        </div>
    )
}