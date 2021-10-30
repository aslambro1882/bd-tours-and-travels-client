import React from 'react';
import { Card, Col } from 'react-bootstrap';

const NewsPaper = ({ newspaper }) => {
    const { name, img, country, headline, description, source } = newspaper;
    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={img} />
                <Card.Body className="text-start">
                    <small className="text-primary">{name.toUpperCase()}, {country}</small>

                    <Card.Title><h5>{headline}</h5></Card.Title>
                    <Card.Text>
                        <p>{description}</p>
                        <small className="text-secondary fst-italic">{source.toUpperCase()}</small>
                    </Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default NewsPaper;