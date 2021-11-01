import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const { user } = useAuth();
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [state, setState] = useState('');
    const [zip, setZip] = useState('');
    const [country, setCountry] = useState('');
    const [place, setPlace] = useState('');
    const [rate, setRate] = useState('');
    const [duration, setDuration] = useState('');
    const [status, setStatus] = useState('Pending');
    console.log(name);
    console.log(user)
    const { id } = useParams();
    const [bookOrder, setbookOrder] = useState({});
    console.log(bookOrder);
    // const { _id, country, img, place, rate, duration } = bookOrder;
    useEffect(() => {
        const uri = `https://rocky-brushlands-45454.herokuapp.com/destination/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => setbookOrder(data))
    }, []);

    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        setName(data.name);
        setAddress(data.address);
        setCity(data.city);
        setState(data.state);
        setZip(data.zip);
        setCountry(bookOrder?.country);
        setPlace(bookOrder?.place);
        setRate(bookOrder?.rate);
        setDuration(bookOrder?.duration);
        const bookedInfo = { name, address, city, state, zip, country, place, rate, duration, status }
        console.log(bookedInfo);

        const uri = `https://rocky-brushlands-45454.herokuapp.com/orders/${id}`;
        fetch(uri, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookedInfo)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    alert('Booking Successfull')
                }
                else {
                    alert('Already Booked')
                }
            })

    };


    return (
        <div className="my-5">
            <div className="container mx-auto my-5">
                <Row className="shadow p-2">
                    <Col className=" mx-auto text-start form-width p-5">
                        <h2>Shipping Address</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Name</Form.Label>
                                <Form.Control {...register("name")} type="text" placeholder="Enter Your Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control {...register("address")} type="text" placeholder="1234 Main St" />
                            </Form.Group>
                            <Row className="mb-3">

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>City</Form.Label>
                                    <Form.Select {...register("city")} defaultValue="Choose...">
                                        <option>Choose...</option>
                                        <option>Chittagong</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                        <option>Dhaka</option>
                                    </Form.Select>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>State</Form.Label>
                                    <Form.Control {...register("state")} />
                                </Form.Group>


                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control {...register("zip")} />
                                </Form.Group>
                            </Row>

                            <Button variant="primary" type="submit">
                                Submit
                            </Button>
                        </Form>
                    </Col>
                    <Col className="d-flex justify-content-center align-items-center">
                        <div>
                            <img src={bookOrder?.img} alt="" width="100%" />
                            <h2>Location : {bookOrder?.country?.toUpperCase()},{bookOrder?.place}</h2>
                            <h3>Travel Duration : {bookOrder?.duration}</h3>
                            <h5>Total Cost : {bookOrder?.rate}tk</h5>

                        </div>
                    </Col>
                </Row>
            </div>

        </div>
    );
};

export default PlaceOrder;