import React from 'react';


const ManageOrder = ({ order }) => {
    console.log(order)

    const approve = id => {
        const uri = `http://localhost:5000/orders/${id}`;
        order = { status: "approved" }

        fetch(uri, {
            method: "PUT",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('approved success')
                }
            })
    }

    const handleDelete = id => {
        const uri = `http://localhost:5000/orders/${id}`;
        fetch(uri, {
            method: "DELETE"
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount > 0) {
                    alert('Delete Success');
                }
            })
    }
    let design;
    if (order.status === 'approved') {
        design = 'text-primary';
    }
    else {
        design = 'text-danger';
    }
    return (
        <tr>
            <td>{order.name}</td>
            <td>{order.country},{order.place}</td>
            <td>{order.address},{order.city}</td>
            <td>{order.rate}</td>
            <td className={design}>{order.status}</td>
            <td><button onClick={() => approve(order._id)} className="btn btn-primary">Approve</button></td>
            <td><button onClick={() => handleDelete(order._id)} className="btn btn-outline-danger">Delete</button></td>

        </tr>
    );
};

export default ManageOrder;