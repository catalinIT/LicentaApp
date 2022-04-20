import React from "react";
import { Link } from "react-router-dom";
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import IsFavoriteButton from "./isFavoriteButton";

interface Props {
    learningUnit: LearningUnit
}

export default function LearningUnitListItem({ learningUnit }: Props) {
    return (
        <Segment.Group>
            <Segment>
                <Item.Group>
                    <Item className="learningUnitItem" key={learningUnit.id}>
                        <Item.Content>
                            <Item.Header className="itemHeader" as='a'>{learningUnit.title}</Item.Header>
                            <Item.Description>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Item.Description>
                            <Item.Image size="tiny" circular src='/assets/emoji5.jpg' />
                            <Item.Extra style={{ height: "fit-content" }}>
                                <Button
                                    as={Link} to={`/learningUnits/${learningUnit.id}`}
                                    style={{ margin: "1.5%" }}
                                    className="button-84"
                                    content='See contents' />
                                <IsFavoriteButton learningUnit={learningUnit} />
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                </Item.Group>
            </Segment>
        </Segment.Group>
    )
}