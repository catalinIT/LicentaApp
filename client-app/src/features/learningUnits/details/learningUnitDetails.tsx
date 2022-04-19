import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Header, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';


export default observer(function LearningUnitDetails() {

    const { learningUnitStore } = useStore();
    const { selectedLearningUnit: learningUnit, loadLearningUnit, loadingInitial} = learningUnitStore;
    const {id} = useParams<{id: string}>();

    useEffect(() => {
        if (id) {
            loadLearningUnit(id);
        }
    }, [id, loadLearningUnit])

    if (loadingInitial || !learningUnit) return <LoadingComponent/>;

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
                    <Button basic color='blue' content='Cancel' />
                </Button.Group>
            </Card.Content>
        </Card>
    )
})