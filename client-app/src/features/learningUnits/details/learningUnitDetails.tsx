import { observer } from 'mobx-react-lite';
import React from 'react';
import { Button, Card, Header, Image } from 'semantic-ui-react';
import { LearningUnit } from '../../../app/models/learningUnit';
import { useStore } from '../../../app/stores/store';


export default observer(function LearningUnitDetails() {

    const { learningUnitStore } = useStore();
    const { selectedLearningUnit, cancelSelectedLearningUnit } = learningUnitStore

    if (!selectedLearningUnit) return <></>;

    return (

        <Card fluid>
            <Image src={`/assets/2010-brown-bear.jpg`} />
            <Card.Content>
                <Card.Header>{selectedLearningUnit.title}</Card.Header>
                <Card.Meta>
                    <span>{'aici vine subtitlul'}</span>
                </Card.Meta>
                <Card.Description>
                    {'aici vine descrierea'}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={cancelSelectedLearningUnit} basic color='blue' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})