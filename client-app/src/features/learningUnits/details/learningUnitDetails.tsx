import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';
import LoadingComponent from '../../../app/layout/LoadingComponents';
import { useStore } from '../../../app/stores/store';
import LearningUnitChat from './LearningUnitChat';
import LearningUnitContent from './LearningUnitContent';
import LearningUnitDetailedHeader from './LearningUnitDetailedHeader';


export default observer(function LearningUnitDetails() {

    const { learningUnitStore } = useStore();
    const { selectedLearningUnit: learningUnit, loadLearningUnit, loadLearningUnitComments, loadingInitial, selectedLearningUnitComments: comments } = learningUnitStore;
    const { id } = useParams<{ id: string }>();

    useEffect(() => {
        if (id) {
            loadLearningUnit(id);
            loadLearningUnitComments(id);
        }
    }, [id, loadLearningUnit, loadLearningUnitComments])

    if (loadingInitial || !learningUnit) return <LoadingComponent />;

    return (
        <Grid>
            <Grid.Column width={16}>
                <LearningUnitDetailedHeader learningUnit={learningUnit} />
                <LearningUnitContent learningUnit={learningUnit} />
                <LearningUnitChat />
            </Grid.Column>
        </Grid>
    )
})