import React, {useState} from "react";
import {Row, Col, FormControl, Button} from "react-bootstrap";

const CityInput = ({onSearch}) => {
    const [city, setCity] = useState('');

    const onKeyDown = (event) => {
        if (event.keyCode === 13) {
            onSearch(city);
        }
    };

    return (
        <>
            <Row>
                <Col>
                    <h1 className="call-to-action">Type down your city</h1>
                </Col>
            </Row>

            <Row>
                <Col xs={2} className={'text-center'}>
                    <FormControl
                        placeholder={"Enter city"}
                        onChange={(event) => setCity(event.target.value)}
                        value={city}
                        onKeyDown={onKeyDown}
                    />
                </Col>
            </Row>

            <Row>
                <Col>
                    <Button className="button-main" onClick={()=> onSearch(city)}>Check Weather</Button>
                </Col>
                <Row>
                    <p className="city-name">{city}</p>
                </Row>
            </Row>
        </>
    )
}

export default CityInput;