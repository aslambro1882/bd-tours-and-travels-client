import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import useAuth from '../hooks/useAuth';

const PlaceOrder = () => {
    const { register, reset, handleSubmit } = useForm();

    const { id } = useParams();
    const [bookOrder, setbookOrder] = useState({});
    console.log(bookOrder);
    // const { _id, country, img, place, rate, duration } = bookOrder;
    useEffect(() => {
        const uri = `https://rocky-brushlands-45454.herokuapp.com/destination/${id}`;
        fetch(uri)
            .then(res => res.json())
            .then(data => {
                setbookOrder(data);

            })
    }, [id]);


    const onSubmit = data => {
        data.country = bookOrder.country;
        data.place = bookOrder.place;
        data.rate = bookOrder.rate;
        data.duration = bookOrder.duration;
        data.status = 'pending';
        console.log(data);

        const uri = `https://rocky-brushlands-45454.herokuapp.com/orders/${id}`;
        console.log(uri);
        fetch(uri, {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
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
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="mb3">
                                <label className="form-label">Name</label>
                                <input className="form-control" {...register("name")} type="text" placeholder="Enter Your Name" />
                            </div>

                            <div className="mb3">
                                <label className="form-label">Address</label>
                                <input className="form-control" {...register("address")} type="text" placeholder="1234 Main St" />
                            </div>
                            <Row className="mb-3">
                                <Col>
                                    <div>
                                        <label className="form-label">City</label>
                                        <input className="form-control" {...register("city")} type="text" placeholder="1234 Main St" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label className="form-label">State</label>
                                        <input className="form-control" {...register("state")} type="text" placeholder="1234 Main St" />
                                    </div>
                                </Col>
                                <Col>
                                    <div>
                                        <label className="form-label">ZIP</label>
                                        <input className="form-control" {...register("zip")} type="text" placeholder="1234 Main St" />
                                    </div>
                                </Col>

                            </Row>

                            <button type="submit" className="btn btn-primary">Submit</button>
                        </form>
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