import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Destination from '../Destination/Destination';

const Destinations = () => {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/destination')
            .then(res => res.json())
            .then(data => setDestinations(data))
    }, [])
    return (
        <div className="my-5">
            <h2>Our Main Offerings</h2>
            <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">

                {
                    destinations?.map(destination => <Destination
                        destination={destination}
                    ></Destination>)
                }

            </Row>
        </div>
    );
};

export default Destinations;