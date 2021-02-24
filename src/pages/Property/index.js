import React, { useState, useEffect} from 'react';

// 3rd party component
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Button, Typography, TextField, Grid, Paper } from '@material-ui/core';
import CircularProgress from '@material-ui/core/CircularProgress';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { divIcon } from 'leaflet';

import { FaStar } from "react-icons/fa";

// local
import "./Property.css";
import { houses } from '../../utils/mock';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      overflow:`hidden`,
      position:`relative`,
    }
}));

// state objects

export default function PropertyPage(props) {
    const classes = useStyles();
    const stays = 100;

    const [properties, setProperties] = useState(null);

    useEffect(() => {
        // update the state
        setProperties(houses);
    }, []);

    let icon = divIcon({
        className:"marker-div",
        html:"6k"
    });

    if(!properties) {
        return (
            <div>
                <CircularProgress color="secondary" />
            </div>
        )
    }

    return(
        <div className={classes.root}>
            <Grid container spacing={3} >
                <Grid item md={7} xs={12}>
                    <div className="list-header">
                        <div>
                            {stays}+ rentals
                        </div>
                        <h3>Rentals in selected map area</h3>

                        <div className="filters">
                            <div className="filter">Type of Rental</div>
                            <div className="filter">Price</div>
                        </div>
                    </div>
                    <div className="list-section">
                        {Object.keys(properties).map(id => (
                            <Card property={properties[id]} id={id} key={id.toString()}/>
                        ))}

                        {/* pagination */}
                    </div>
                </Grid>

                <Grid item md={5} xs={12}>
                    <div className="map-section">
                        <MapContainer center={[-0.7521374, 36.4554083]} zoom={15} scrollWheelZoom={false} className="map">
                            <TileLayer
                                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                                url="https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=pk.eyJ1IjoiZGF1ZGk5NyIsImEiOiJjanJtY3B1bjYwZ3F2NGFvOXZ1a29iMmp6In0.9ZdvuGInodgDk7cv-KlujA"
                            />
                            <Marker position={[-0.7521374, 36.4654083]} icon={icon}>
                                <Popup>
                                    A pretty CSS3 popup. <br /> Easily customizable.
                                </Popup>
                            </Marker>
                        </MapContainer>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}

function Card({ property, id }) {
    const classes = useStyles();
    const reviewCount = property.reviews.length;
    const sumRating = property.reviews.reduce((a, b)=> {
        a+= b.rating;
        return a;
    }, 0) 
    
    const avgRating = sumRating / reviewCount;

    
    return (
    <div className="card">
        <div className="image-section">
            <img src="https://picsum.photos/seed/picsum/300/200" />
        </div>
        <div className="description-section">
            <div className="text"> {property.type}</div>
            <div className="title">
                <Link to={"/property/" + property.plot_id + "/" + id +"/"} className={classes.linkText} key={""}>
                    {property.title}
                </Link>
                                        
            </div>

            <div className="ammenity">
                    { property.ammenity.bedroom } bedroom 
                    <span className="dot">•</span>
                    { property.ammenity.bath } bath
                    <span className="dot">•</span>
                    { property.ammenity.electricity } Electricity 
            </div>

            <div className="bottom-section">
                <div className="reviews">
                    <Link to="">
                        <FaStar className="fa-star" /> {avgRating.toFixed(1)} ({property.reviews.length } reviews)
                    </Link>
                </div>
                <div className="price">{property.cost} / month</div>
            </div>
        </div>
    </div>
    )
}