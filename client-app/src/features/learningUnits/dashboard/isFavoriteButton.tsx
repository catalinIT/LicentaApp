import React, { ChangeEvent, useState } from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';

interface Props {
    learningUnit: LearningUnit;
    handleSetLearningUnitFavorite: (learningUnit: LearningUnit) => void;
}

export default function IsFavoriteButton({ learningUnit, handleSetLearningUnitFavorite }: Props) {

    const [selectedLearningUnit, setSelectedLearningUnit] = useState(learningUnit);

    function handleSetFavorite() {
        setSelectedLearningUnit(learningUnit);
        selectedLearningUnit.isFavorite = !selectedLearningUnit.isFavorite;
        handleSetLearningUnitFavorite(selectedLearningUnit);
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
}