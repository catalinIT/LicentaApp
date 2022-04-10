import React, { useState } from "react";
import { Button, Item, Segment } from "semantic-ui-react";
import { LearningUnit } from "../../../app/models/learningUnit";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Favorite from "@material-ui/icons/Favorite";
import IconButton from '@material-ui/core/IconButton';

interface Props {
    learningUnits: LearningUnit[]
}

export default function LearningUnitList({ learningUnits }: Props) {

    const [fav, setFav] = useState(false);

    return (
        <Segment>
            <Item.Group divided>
                {learningUnits.map(learningUnit => (
                    <Item className="learningUnitItem" key={learningUnit.id}>
                        <Item.Content style={{height: "fit-content"}} className="dashboardItem">
                            <Item.Header className="itemHeader" as='a'>{learningUnit.title}</Item.Header>
                            <Item.Extra style={{height: "fit-content"}}>
                                <Button style={{ margin: "1.5%" }} className="button-84" content='See contents' />
                                {!fav &&
                                    <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
                                        <FavoriteBorderIcon style={{color: "gold"}}></FavoriteBorderIcon>
                                    </IconButton>
                                }
                                {fav &&
                                    <IconButton onClick={() => { setFav(!fav) }} aria-label="delete" color="primary">
                                        <Favorite style={{color: "gold"}}></Favorite>
                                    </IconButton>
                                }
                            </Item.Extra>
                        </Item.Content>
                    </Item>
                ))}
            </Item.Group>
        </Segment>
    )
}