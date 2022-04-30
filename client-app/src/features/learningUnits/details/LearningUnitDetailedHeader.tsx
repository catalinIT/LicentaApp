import { observer } from "mobx-react-lite"
import {  Header, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";

interface Props {
    learningUnit: LearningUnit
}

export default observer (function LearningUnitDetailedHeader({learningUnit}: Props) {
    return (
        <Segment.Group>
            <Segment basic attached='top' >
                <Segment basic>
                    <Item.Group>
                        <Item>
                            <Item.Content>
                                <Header className="detailsHeader"
                                    content={learningUnit.title}
                                />
                                <p>
                                    Category: <strong>{learningUnit.category}</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>
    )
})