import React from 'react';
import { Row } from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="container-fluid bg-dark shadow py-3">
            <Row>
                <div className="col-lg-3 col-md-6 col-sm-12">
                    <div className="d-flex justify-content-center align-items-center h-100">
                        <img width="220px" src="https://i.ibb.co/JxnJ1P2/6289366828-cfd7bfa9-89dc-42b2-b010-03656fbc4c48.png" alt="" />
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                    <h5>Quick Links</h5>
                    <p>C2C</p>
                    <p>Enterprise</p>
                    <p>Coverage Area</p>
                    <p>FAQ'S</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                    <h3>Office Location:</h3>
                    <p>Nur Bhaban, Baniar Pul<br />
                        Chand Miah Road, Chandgaon, Chittagong
                    </p>
                    <p>01907706880</p>
                    <p>0909maruf@gmail.com</p>
                </div>
                <div className="col-lg-3 col-md-6 col-sm-12 text-white">
                    <h4>Social Links</h4>
                    <div className="icons mb-3">
                        <i class="fab fa-facebook-f"></i>
                        <i class="fab fa-linkedin-in"></i>
                        <i class="fab fa-youtube"></i>
                    </div>
                    <small>&copy; BDToursAndTravels 2021. All rights reserved</small>
                </div>
            </Row>
        </div>
    );
};

export default Footer;