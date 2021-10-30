import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const AddNewOffer = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = data => {
        console.log(data);
        fetch('http://localhost:5000/destination', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then()
    }
    return (
        <div className="login-container">
            <h2>Add New Tour Offer</h2>
            <div className="d-flex flex-column">
                <Form onSubmit={handleSubmit(onSubmit)} className=" mx-auto text-start form-width shadow p-5">
                    <Form.Group className="mb-3">
                        <Form.Label>Country</Form.Label>
                        <Form.Control {...register("country")} type="text" placeholder="Country Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Place</Form.Label>
                        <Form.Control {...register("place")} type="text" placeholder="Place Name" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Image URL</Form.Label>
                        <Form.Control {...register("img")} type="text" placeholder="Image URL" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Price</Form.Label>
                        <Form.Control {...register("rate")} type="number" placeholder="Price" />
                    </Form.Group>

                    <input className="btn btn-warning w-100" type="submit" />

                </Form>
            </div>

        </div>
    );
};

export default AddNewOffer;