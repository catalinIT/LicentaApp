import React, { ChangeEvent, useState } from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';
import { store, useStore } from "../../../app/stores/store";
import { observer } from "mobx-react-lite";

interface Props {
    learningUnit: LearningUnit;
}

export default observer(function IsFavoriteButton({ learningUnit }: Props) {

    const {learningUnitStore} = useStore();

    function handleSetFavorite() {
        learningUnitStore.updateLearningUnitFavoriteState(learningUnit);
    }

    return (
        <>
            {learningUnit.isFavorite &&
                <IconButton onClick={handleSetFavorite} aria-label="delete" color="primary">
                    <Favorite style={{ color: "gold" }}></Favorite>
                </IconButton>
            }
            {!learningUnit.isFavorite &&
                <IconButton onClick={handleSetFavorite} aria-label="delete" color="primary">
                    <FavoriteBorderIcon style={{ color: "gold" }}></FavoriteBorderIcon>
                </IconButton>
            }
        </>
    )
})