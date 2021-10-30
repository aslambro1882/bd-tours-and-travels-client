import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Row } from 'react-bootstrap';
import NewsPaper from '../NewsPaper/NewsPaper';

const NewsPapers = () => {
    const [newspapers, setNewspapers] = useState([]);

    useEffect(() => {
        fetch('https://rocky-brushlands-45454.herokuapp.com/news')
            .then(res => res.json())
            .then(data => setNewspapers(data))
    }, [])
    return (
        <div className="my-5">
            <h2>News</h2>
            <Row xs={1} md={2} lg={3} className="g-4 container mx-auto">
                {
                    newspapers?.map(newspaper => <NewsPaper
                        key={newspaper._id}
                        newspaper={newspaper}
                    ></NewsPaper>)
                }
            </Row>

        </div>
    );
};

export default NewsPapers;