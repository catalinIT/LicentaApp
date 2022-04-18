import React, { useState } from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import IsFavoriteButton from "./isFavoriteButton";
import { useStore } from "../../../app/stores/store";

interface Props {
    learningUnits: LearningUnit[];
}

export default function LearningUnitList({ learningUnits }: Props) {

    const {learningUnitStore} = useStore();

    return (
        <Segment>
            <Item.Group divided>
                {learningUnits.map(learningUnit => (
                    <Item className="learningUnitItem" key={learningUnit.id}>
                        <Item.Content style={{ height: "fit-content" }} className="dashboardItem">
                            <Item.Header className="itemHeader" as='a'>{learningUnit.title}</Item.Header>
                            <Item.Extra style={{ height: "fit-content" }}>
                                <Button
                                    onClick={() => learningUnitStore.selectLearningUnit(learningUnit.id)}
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