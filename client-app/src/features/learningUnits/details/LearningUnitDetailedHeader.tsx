import { observer } from "mobx-react-lite"
import { Button, Header, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";

const activityImageStyle = {
    filter: 'brightness(30%)'
};

const activityImageTextStyle = {
    position: 'absolute',
    bottom: '5%',
    left: '5%',
    width: '100%',
    height: 'auto',
    color: 'white'
};

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
                                    Hosted by <strong>Bob</strong>
                                </p>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
            </Segment>
        </Segment.Group>
    )
})