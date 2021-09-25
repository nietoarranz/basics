
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

import { MapContainer, TileLayer, Marker, Popup, useMapEvent } from 'react-leaflet'
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerIconPng from "leaflet/dist/images/marker-icon.png"
import markerLocation from "../Location.png"
import markerBin from "./Bin.png"

//import dataJson from "./fuentes.json";
import { useEffect } from 'react';
import axios from 'axios';
import { Fab } from '@material-ui/core';
import CachedIcon from '@material-ui/icons/Cached';
import SearchIcon from '@material-ui/icons/Search';


const Bin = () => {

    const [data, setData] = React.useState([]);
    const [userLat, setUserLat] = React.useState(null);
    const [userLon, setUserLon] = React.useState(null);
    const [position, setPosition] = React.useState(null);

    const [currentLat, setCurrentLat] = React.useState(null);
    const [currentLon, setCurrentLon] = React.useState(null);

    var userLatV = 48.864716;
    var userLonV = 2.349;

    const [map, setMap] = React.useState(null);

    function MyMap() {
        const map = useMapEvent('moveend', () => {
            console.log(map.getCenter());
            setCurrentLat(map.getCenter().lat);
            setCurrentLon(map.getCenter().lng);
        })
        return null
    }

    useEffect(() => {
        function success(pos) {
            var crd = pos.coords;

            console.log(crd.latitude);
            console.log(crd.longitude);

            setUserLat(crd.latitude)
            setUserLon(crd.longitude);
        };

        function error(err) {
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };


        var options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };

        var id = navigator.geolocation.watchPosition(success, error, options);
        navigator.geolocation.getCurrentPosition(function (position) {
            setUserLat(position.coords.latitude);
            setUserLon(position.coords.longitude);

            userLatV = position.coords.latitude;
            userLonV = position.coords.longitude;

            console.log("Latitude is :", userLatV);
            console.log("Longitude is :", userLonV);


            //var body = "data=[out:json];node[amenity = drinking_water](around: 6000, 48.864716, 2.349);out;"
            var body = "data=[out:json];node[amenity = waste_basket](around: 2000," + position.coords.latitude + "," + position.coords.longitude + ");out;"
            var url = "https://overpass-api.de/api/interpreter";

            axios({
                method: "post",
                url: url,
                data: body,
            })
                .then(function (response) {
                    //console.log(response);
                    setData(response.data.elements)
                })
                .catch(function (error) {
                    // handle error
                    console.log(error);
                })


        });



    }, []);

    //const centerMap = [48.864716, 2.349];// Paris position
    const centerMapLat = 48.864716;
    const centerMapLon = 2.349;

    //console.log(dataJson.elements);

    const onMove = (e) => {
        // magic happens here
        const { lat, lng: lon } = e.target.getCenter()
        // and here
        const zoom = e.target.getZoom()
        const updatedViewPosition = { lat, lon, zoom }
        console.log("Position", updatedViewPosition);
    }

    const reloadElements = () => {
        var body = "data=[out:json];node[amenity = waste_basket](around: 2000," + currentLat + "," + currentLon + ");out;"
        var url = "https://overpass-api.de/api/interpreter";

        axios({
            method: "post",
            url: url,
            data: body,
        })
            .then(function (response) {
                console.log(response);
                setData(response.data.elements)
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <div >
            <Box style={{ height: "100vh" }}>
                {userLat != null && userLon != null &&
                    // @ts-ignore
                    <MapContainer center={[userLat, userLon]} zoom={13} scrollWheelZoom={false} style={{ zIndex: '1' }}>

                        <TileLayer
                            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />

                        <MyMap />

                        <Marker
                            position={[userLat, userLon]}
                            icon={new Icon({ iconUrl: markerLocation, iconSize: [25, 25] })}
                        >
                        </Marker>

                        {
                            data.map((value, key) => {
                                return (
                                    <Marker
                                        key={key}
                                        position={[value.lat, value.lon]}
                                        icon={new Icon({ iconUrl: markerBin, iconSize: [30, 30], iconAnchor: [20, 20] })}
                                    >
                                    </Marker>
                                )
                            })
                        }
                    </MapContainer>

                }

                {/*
                <Fab color="primary" aria-label="add" style={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 20,
                    left: 'auto',
                    position: 'fixed',
                    // @ts-ignore
                    zIndex: '9',
                }} onClick={() => window.location.reload(false)}>
                    <CachedIcon />
                </Fab>
                */
                }

                <Fab color="primary" aria-label="add" style={{
                    margin: 0,
                    top: 'auto',
                    right: 20,
                    bottom: 20,
                    left: 'auto',
                    position: 'fixed',
                    // @ts-ignore
                    zIndex: '9',
                }} onClick={reloadElements}>
                    <SearchIcon />
                </Fab>


            </Box>

        </div>
    )

}

export default Bin
