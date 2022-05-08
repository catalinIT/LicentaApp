import { Button, Menu, MenuItem } from '@material-ui/core';
import React from 'react';
import { FaFilter } from 'react-icons/fa';
import { LearningUnit } from '../../../app/models/learningUnit';
import { useStore } from '../../../app/stores/store';
import { observer } from "mobx-react-lite";

interface Props {
    learningUnits: LearningUnit[]
}

export default observer(function LearningUnitFilter({learningUnits}: Props) {

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const {learningUnitStore} = useStore();
    const {loadFavoriteLearningUnits, setDatabaseUnits} = learningUnitStore

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };
    const getFavorites = () => {
        loadFavoriteLearningUnits();
        setAnchorEl(null);
    }
    const getAll = () => {
        setDatabaseUnits();
        setAnchorEl(null);
    }
    return (
        <div>
            <FaFilter />
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                Filter Learning Units
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <MenuItem onClick={getFavorites}>Get Favorites</MenuItem>
                <MenuItem onClick={getAll}>Get All</MenuItem>
            </Menu>
        </div>
    )
})