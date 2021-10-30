import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const MyOrder = ({ order }) => {

    const [confirmOrder, setConfirmOrder] = useState([]);

    useEffect(() => {
        fetch('https://rocky-brushlands-45454.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setConfirmOrder(data))
    }, [])

    const handleCancelBooking = (id) => {
        fetch(`https://rocky-brushlands-45454.herokuapp.com/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Booking Cancelled')
                }
                else {
                    alert('Already Cancelled')
                }
                const remaining = confirmOrder.filter(o => o._id !== id)
                setConfirmOrder(remaining);


            })
    }
    let design;
    if (order.status === 'approved') {
        design = 'text-primary'
    }
    else {
        design = 'text-danger'
    }
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.country},{order.place}</td>
            <td>{order.address},{order.city}</td>
            <td>{order.rate}</td>
            <td className={design}>{order.status}</td>
            <td><button className="btn btn-outline-danger" onClick={() => handleCancelBooking(order._id)}>cancel</button></td>

        </tr>
    );
};

export default MyOrder;


/* <div className="container mx-auto my-2">
               <Row className="shadow">
                   <Col className="p-0">
                       <img src={order?.img} alt="" width="100%" />
                   </Col>
                   <Col className="d-flex justify-content-center align-items-center">
                       <div>
                           <h2>Location : {order?.country?.toUpperCase()},{order?.place}</h2>
                           <h3>Travel Duration : {order?.duration}</h3>
                           <h5>Total Cost : {order?.rate}tk</h5>
                           <Row>
                               <Col className="">
                                   <button className="btn btn-outline-primary w-75">Confirm</button>
                               </Col>
                               <Col>
                                   <button onClick={() => handleCancelBooking(order._id)} className="btn btn-outline-warning w-75">Cancel Booking</button>
                               </Col>
                           </Row>
                       </div>
                   </Col>
               </Row>
           </div> */