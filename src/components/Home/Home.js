import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import NewsPapers from '../NewsPapers/NewsPapers';


const Home = () => {
    return (
        <div className="banner">
            <Banner></Banner>
            <Destinations></Destinations>
            <NewsPapers></NewsPapers>
        </div>
    );
};

export default Home;