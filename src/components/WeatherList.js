import React from 'react'
import { Col, Row } from 'react-bootstrap'
import WeatherCard from './WeatherCard'

const WeatherList = ({weathers}) => {
    return (
        <Row>
            {weathers.slice(0,5).map(({dt, humidity, temp, weather}) => (
                <Col key={dt}>
                    <WeatherCard
                        humidity={humidity}
                        temp_morn={temp.morn}
                        temp_day={temp.day}
                        temp_night={temp.night}
                        icon = {weather[0].icon}
                        temp_max={temp.max}
                        temp_min={temp.min}
                        dt={dt * 1000}
                    />
                </Col>
            ))}
        </Row>
    )
}

export default WeatherList;