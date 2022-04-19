
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import IsFavoriteButton from "./isFavoriteButton";
import { useStore } from "../../../app/stores/store";
import { Link } from "react-router-dom";


export default function LearningUnitList() {

    const {learningUnitStore} = useStore();
    const {learningUnits} = learningUnitStore;
    
     return (
        <Segment>
            <Item.Group divided>
                {learningUnits.map(learningUnit => (
                    <Item className="learningUnitItem" key={learningUnit.id}>
                        <Item.Content style={{ height: "fit-content" }} className="dashboardItem">
                            <Item.Header className="itemHeader" as='a'>{learningUnit.title}</Item.Header>
                            <Item.Extra style={{ height: "fit-content" }}>
                                <Button
                                    as={Link} to={`/learningUnits/${learningUnit.id}`}
                                    style={{ margin: "1.5%" }}
                                    className="button-84"
                                    content='See contents' />
                                <IsFavoriteButton learningUnit={learningUnit} />
                            </Item.Extra>
                            <Item.Extra className="itemHeader">
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}