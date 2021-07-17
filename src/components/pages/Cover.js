import React from 'react';
import '../../App.css';
import { Box, Typography } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { Fab } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';

function Cover() {
    return (
        <div className="App">

            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <header className="App-header">
                <Typography variant="h6" style={{color: "black"}}>
                    Basics
                </Typography>
                <Box m={2}/>
                <Button component={Link} to="/home" color="primary" variant="outlined" style={{border: "2px solid"}}>
                    Start
                </Button>
            </header>
        </div>
    );
}

export default Cover;
