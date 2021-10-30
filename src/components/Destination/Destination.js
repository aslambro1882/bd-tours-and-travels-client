import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Destination.css'

const Destination = ({ destination }) => {
    const { _id, country, img, rate, duration, place } = destination;
    const uri = `/destination/${_id}`;
    return (
        <div>
            <Col>
                <Card className="h-full shadow">
                    <div className="img-size">
                        <Card.Img variant="top" src={img} className="" />
                    </div>
                    <Card.Body className="m-0 p-0">
                        <Card.Title className="bg-info">{country.toUpperCase()}</Card.Title>
                        <Card.Text className="py-3">
                            <h5>Explore {place} in {duration}</h5>
                            <small className="text-danger">STARTS FROM BDT {rate} PER PERSON</small>
                            <br />
                            <Link to={uri}><button className="btn btn-outline-warning">Book Now</button></Link>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Destination;