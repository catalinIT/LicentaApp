import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Button, Card, Grid, Header, Image } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import LearningUnitChat from './LearningUnitChat';
import LearningUnitContent from './LearningUnitContent';
import LearningUnitDetailedHeader from './LearningUnitDetailedHeader';


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
        <Grid>
            <Grid.Column width={16}>
                <LearningUnitDetailedHeader learningUnit={learningUnit} />
                <LearningUnitContent />
                <LearningUnitChat />
            </Grid.Column>
        </Grid>
    )
})