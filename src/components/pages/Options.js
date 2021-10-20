import React, { Component } from 'react'
import { Typography } from '@material-ui/core';
import { List } from '@material-ui/core';
import { ListItem } from '@material-ui/core';
import { ListItemAvatar } from '@material-ui/core';
import { Avatar } from '@material-ui/core';
import { ListItemText } from '@material-ui/core';
import PublicIcon from '@material-ui/icons/Public';
import FlagIcon from '@material-ui/icons/Flag';
import { Box } from '@material-ui/core';
import { AppBar } from '@material-ui/core';
import { Toolbar } from '@material-ui/core';
import EuroSymbolIcon from '@material-ui/icons/EuroSymbol';
import { Link } from 'react-router-dom';
import markerWater from "./DrinkingWater/Drinking_water.png"
import markerToilet from "./Toilet/Toilet.png"
import markerBin from "./Bin/Bin.png"
import markerBench from "./Bench/Bench.png"
import { Height } from '@material-ui/icons';

export class Options extends Component {
    render() {
        return (
            <div>
                <AppBar position="static" style={{ backgroundColor: "white" }}>
                    <Toolbar>
                        <Typography variant="h6" style={{ color: "black" }}>
                            Which basic do you need?
                        </Typography>
                    </Toolbar>
                </AppBar>
                <Typography variant="h4"></Typography>
                <Box m={1} />

                <List>
                    <ListItem component={Link} to="/DrinkingWater">
                        <ListItemAvatar>
                            <img src={markerWater} style={{ height: "50px", width: "50px" }}></img>
                        </ListItemAvatar>
                        <ListItemText primary="Drinking fountains" />
                    </ListItem>
                    <ListItem component={Link} to="/Toilet">
                        <ListItemAvatar>
                            <img src={markerToilet} style={{ height: "50px", width: "50px" }}></img>
                        </ListItemAvatar>
                        <ListItemText primary="Toilets" />
                    </ListItem>
                    <ListItem component={Link} to="/Bin">
                        <ListItemAvatar>
                            <img src={markerBin} style={{ height: "50px", width: "50px" }}></img>
                        </ListItemAvatar>
                        <ListItemText primary="Bins" />
                    </ListItem>
                    <ListItem component={Link} to="/Map">
                        <ListItemAvatar>
                            <img src={markerBench} style={{ height: "50px", width: "50px" }}></img>
                        </ListItemAvatar>
                        <ListItemText primary="Benches" />
                    </ListItem>
                </List>
            </div>
        )
    }
}

export default Options
