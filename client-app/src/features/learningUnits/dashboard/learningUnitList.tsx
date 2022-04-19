
import { Item, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import LearningUnitListItem from "./LearningUnitListItem";


export default function LearningUnitList() {

    const {learningUnitStore} = useStore();
    const {learningUnits} = learningUnitStore;
    
     return (
        <Segment>
            <Item.Group divided>
                {learningUnits.map(learningUnit => (
                    <LearningUnitListItem key={learningUnit.id} learningUnit={learningUnit} />
                 ))}
            </Item.Group>
        </Segment>
    )
}