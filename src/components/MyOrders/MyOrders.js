import React, { useEffect, useState } from 'react';
import * as ReactBoostrap from 'react-bootstrap';
import MyOrder from '../MyOrder/MyOrder';


const MyOrders = () => {
    const [orders, setOrders] = useState([]);
    console.log(orders)
    useEffect(() => {
        fetch('https://rocky-brushlands-45454.herokuapp.com/orders')
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])
    return (
        <div className="container shadow">
            <h2>Your Booked Places</h2>
            <ReactBoostrap.Table striped border hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Travel Location</th>
                        <th>Client's Address</th>
                        <th>Cost</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        orders.map(order => <MyOrder
                            key={order._id}
                            order={order}></MyOrder>)
                    }
                </tbody>

            </ReactBoostrap.Table>
        </div>

    );
};

export default MyOrders;