import React from 'react';
import { Form } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useLocation } from 'react-router';
import useAuth from '../hooks/useAuth';
import './Login.css'

const Login = () => {
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/home';
    const { handleGoogleSignIn, setIsLoading } = useAuth();
    const { register, handleSubmit } = useForm();
    const onSubmit = data => console.log(data);

    const handleGoogle = () => {
        setIsLoading(true)
        handleGoogleSignIn()
            .then(result => {
                history.push(redirect_uri)
            })
            .finally(() => {
                setIsLoading(false)
            })

    }
    return (
        <div className="login-container">
            <div className="d-flex flex-column">
                <Form onSubmit={handleSubmit(onSubmit)} className=" mx-auto text-start form-width shadow p-5">
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control {...register("name", { required: true, maxLength: 20 })} type="email" placeholder="name@example.com" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Password</Form.Label>
                        <Form.Control {...register("password",)} type="password" placeholder="Password" />
                    </Form.Group>

                    <input className="btn btn-warning w-100" type="submit" />

                </Form>
            </div>
            ---------------Or---------------
            <button onClick={handleGoogle} className="btn shadow">Continue with Google</button>
        </div>
    );
};

export default Login;