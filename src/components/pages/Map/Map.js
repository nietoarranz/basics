
import React from 'react'
import { Box, CircularProgress, Paper, Typography } from '@material-ui/core';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvent } from 'react-leaflet'
import { Icon } from "leaflet";
import 'leaflet/dist/leaflet.css';
import markerLocation from "../Location.png"
import markerWater from "../../img/DrinkingWater.png"
import markerBench from "../../img/Bench.png"
import markerBin from "../../img/Bin.png"
import markerToilet from "../../img/Toilet.png"
import { useEffect } from 'react';
import axios from 'axios';
import { Fab } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { useParams } from 'react-router-dom';



const Map = (props) => {

    let { type } = useParams();

    var option = "";
    const [marker, setMarker] = React.useState(null);
    const [amenity, setAmenity] = React.useState(null);
    const [nameAmenity, setNameAmenity] = React.useState(null);

    const [data, setData] = React.useState([]);
    const [userLat, setUserLat] = React.useState(null);
    const [userLon, setUserLon] = React.useState(null);
    const [position, setPosition] = React.useState(null);

    const [currentLat, setCurrentLat] = React.useState(null);
    const [currentLon, setCurrentLon] = React.useState(null);

    const [loadingMap, setLoadingMap] = React.useState(true);
    const [loadingElements, setLoadingElements] = React.useState(true);

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

        console.log("Enter UseEffect");

        if(amenity == null){

            console.log("Enter setAmenity");

            if (type === "bench") {
                console.log("Enter setAmenity bench");
                setMarker(markerBench);
                setAmenity("bench");
                setNameAmenity("Benches");
            }

            if (type === "bin") {
                console.log("Enter setAmenity waste_basket");
                setMarker(markerBin);
                setAmenity("waste_basket");
                setNameAmenity("Bins");
            }

            if (type === "drinkingwater") {
                console.log("Enter setAmenity drinking_water");
                setMarker(markerWater);
                setAmenity("drinking_water");
                setNameAmenity("Fountains");
            }

            if (option === "toilet") {
                console.log("Enter setAmenity toilets");
                setMarker(markerToilet);
                setAmenity("toilets");
                setNameAmenity("Toilets");
            }
        }

        if(amenity != null){
            console.log("Amenity: " + amenity);

            function success(pos) {
                var crd = pos.coords;

                console.log(crd.latitude);
                console.log(crd.longitude);

                setUserLat(crd.latitude)
                setUserLon(crd.longitude);
                setLoadingMap(false);
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
                var body = "data=[out:json];node[amenity = " + amenity + "](around: 1000," + position.coords.latitude + "," + position.coords.longitude + ");out;"
                var url = "https://overpass-api.de/api/interpreter";

                axios({
                    method: "post",
                    url: url,
                    data: body,
                })
                    .then(function (response) {
                        console.log(response);
                        setLoadingElements(false);
                        setData(response.data.elements)
                    })
                    .catch(function (error) {
                        // handle error
                        console.log(error);
                    })


            });

        }

    }, [type, amenity]);

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
        setLoadingElements(true);
        var body = "data=[out:json];node[amenity = " + amenity + "](around: 700," + currentLat + "," + currentLon + ");out;"
        var url = "https://overpass-api.de/api/interpreter";

        axios({
            method: "post",
            url: url,
            data: body,
        })
            .then(function (response) {
                console.log(response);
                setLoadingElements(false);
                setData(response.data.elements);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }


    return (
        <div >

            {loadingMap && 
                <Box style={{ height: "100vh", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
                    <Box mb={3}>
                        <CircularProgress />
                    </Box>
                    <Typography variant="h6" style={{ color: "#7a7a7a"}}>Loading map</Typography>
                </Box>
            }


            {!loadingMap &&
                <Box style={{ height: "100vh" }}>

                    

                    {userLat != null && userLon != null &&
                        // @ts-ignore
                        <MapContainer center={[userLat, userLon]} zoom={16} scrollWheelZoom={true} style={{ zIndex: '1' }}>

                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                //url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                url="https://api.mapbox.com/styles/v1/quiquenieto/ckxkng84x21et14mm0ytxzzec/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoicXVpcXVlbmlldG8iLCJhIjoiY2t4a3Fzc29jNWUzdTMwbzF3MjkzNHB2byJ9.WIlUwGEQ1zMSHNOISbgruQ"
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
                                            icon={new Icon({ iconUrl: marker, iconSize: [30, 30], iconAnchor: [20, 20] })}
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


                    {loadingElements &&
                        <Paper 
                            style={{
                                backgroundColor: "#ffffff",
                                position: "fixed",
                                zIndex: "9",
                                inset: "auto 90px 20px",
                                padding: "20px",
                                display: "flex",
                                flexDirection:"row",
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50px"
                            }}
                            elevation={0} >
                            Loading elements...
                        </Paper>
                    }

                </Box>
            }

        </div>
    )

}

export default Map
