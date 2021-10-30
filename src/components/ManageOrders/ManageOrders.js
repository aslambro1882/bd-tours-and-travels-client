import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import ManageOrder from '../ManageOrder/ManageOrder';

const ManageOrders = () => {
    const [orders, setOrders] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container shadow">
            <h2>Manage Tour Booking Request</h2>
            <ReactBoostrap.Table striped border hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Travel Location</th>
                        <th>Client's Address</th>
                        <th>Cost</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <ManageOrder
                            key={order._id}
                            order={order}></ManageOrder>)
                    }
                </tbody>

            </ReactBoostrap.Table>
        </div>
    );
};

export default ManageOrders;