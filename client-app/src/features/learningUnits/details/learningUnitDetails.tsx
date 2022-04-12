import React from 'react';
import { Button, Card, Header, Image } from 'semantic-ui-react';
import { LearningUnit } from '../../../app/models/learningUnit';

interface Props {
    learningUnit: LearningUnit;
    cancelSelectLearningUnit: () => void;
}

export default function LearningUnitDetails({ learningUnit, cancelSelectLearningUnit }: Props) {
    return (
        
        <Card fluid>
            <Image src={`/assets/2010-brown-bear.jpg`} />
            <Card.Content>
                <Card.Header>{learningUnit.title}</Card.Header>
                <Card.Meta>
                    <span>{'aici vine subtitlul'}</span>
                </Card.Meta>
                <Card.Description>
                    {'aici vine descrierea'}
                </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Button.Group widths='2'>
                    <Button onClick={cancelSelectLearningUnit} basic color='blue' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
}