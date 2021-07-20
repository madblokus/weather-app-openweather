import React from 'react';
import {Card} from 'react-bootstrap';
import classes from '../styles/WeatherCard.module.scss'

    const WeatherCard = ({dt, humidity, temp_morn, temp_day, temp_night, icon, temp_max, temp_min }) => {
    const date = new Date(dt);
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'};

    return (
        <div className={classes.Card}>
            <Card.Img variant="top" src={`https://openweathermap.org/img/wn/${icon}@2x.png`}/>
            <Card.Body>
                <p>
                    {date.toLocaleDateString('en-us', options)}
                </p>
                <p>Morning: {temp_morn} °C</p>
                <p>Day: {temp_day} °C</p>
                <p>Night: {temp_night} °C</p>
                <p>Humidity: {humidity}</p>
                <p>Temp max: {temp_max} °C</p>
                <p>Temp min: {temp_min} °C</p>
            </Card.Body>
        </div>
    )
}

export default WeatherCard