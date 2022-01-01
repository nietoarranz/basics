import React, { Component } from 'react'
import { Grid, Typography } from '@material-ui/core';
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

import IconToilet from "../img/IconToilet.png"
import IconFountain from "../img/IconFountain.png"
import IconLogo from "../img/Logo.png"

export class Options extends Component {
    render() {
        return (
            <div style={{ backgroundColor: "#F5F5F5"}} className='divOptions'>

                <Box p={4} className='divOptions'>
                    <Grid
                        container
                        direction="column"
                        justifyContent="center"
                        alignItems="flex-start"
                        style={{marginTop: "auto"}}
                    >

                        <Typography style={{ color: "black", fontSize: "36px", fontWeight: "500", lineHeight: "1.4", marginLeft: "16px" }}>
                            What do you <br/>need?
                        </Typography>

                        

                        <Box m={2}/>

                        <Box style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", textDecoration: "none", width: "-webkit-fill-available"}} p={4} component={Link} to="/Map/toilet">
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={3}
                                style={{ flexWrap: "nowrap" }}
                            >
                                <Grid item>
                                    <img src={IconToilet} style={{ height: "50px", width: "50px"}}></img>
                                </Grid>
                                
                                <Grid
                                    item
                                    container
                                    direction="column"
                                >
                                    <Typography style={{ color: "black", fontSize: "18px", fontWeight: "500" }}>
                                        Toilets
                                    </Typography>

                                    <Typography style={{ color: "#858585", fontSize: "12px", fontWeight: "400" }}>
                                        Public toilets near your location to glup out
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Box>


                        <Box m={1} />

                        <Box style={{ backgroundColor: "#FFFFFF", borderRadius: "10px", textDecoration: "none", width: "-webkit-fill-available"}} p={4} component={Link} to="/Map/drinkingwater">
                            <Grid
                                container
                                direction="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                spacing={3}
                                style={{ flexWrap: "nowrap" }}
                            >
                                <Grid item>
                                    <img src={IconFountain} style={{ height: "50px", width: "50px" }}></img>
                                </Grid>

                                <Grid
                                    item
                                    container
                                    direction="column"
                                >
                                    <Typography style={{ color: "black", fontSize: "18px", fontWeight: "500" }}>
                                        Fountains
                                    </Typography>

                                    <Typography style={{ color: "#858585", fontSize: "12px", fontWeight: "400" }}>
                                        Public toilets near your location to glup in
                                    </Typography>

                                </Grid>

                            </Grid>
                        </Box>

                        <Box m={1} />

                    </Grid>

                    <Grid
                        container
                        direction="column"
                        justifyContent="flex-start"
                        alignItems="center"
                        style={{ marginTop: "auto" }}
                    >
                        <img src={IconLogo} style={{ height: "50px", width: "auto" }}></img>
                        <Typography style={{ color: "black", fontSize: "11px", fontWeight: "400", fontFamily:"'Roboto Mono' , monospace" }}>
                            an application by nietoArranz
                        </Typography>

                    </Grid>
                </Box>


                
            </div>
        )
    }
}

export default Options
