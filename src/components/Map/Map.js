import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Map = () => {
    return (
        <div className="container-fluid bg-black py-3">
            <Row xs={1} md={2} lg={2} className="container mx-auto">
                <Col>
                    <img src="https://i.ibb.co/B6K1bN5/map-3207136c.png" alt="" width="100%" />
                </Col>
                <Col className="text-white d-flex justify-content-center align-items-center text-start">
                    <div>
                        <h2>BDToursAndTravel's confort travel cover 64 districts and 493 upazilas across the country.</h2>
                        <p>We guarantee the comfortest travel nationwide for any of your logistics needs.</p>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Map;