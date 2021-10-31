import React from 'react';
import Banner from '../Banner/Banner';
import Destinations from '../Destinations/Destinations';
import Map from '../Map/Map';
import NewsPapers from '../NewsPapers/NewsPapers';


const Home = () => {
    return (
        <div className="banner">
            <Banner></Banner>
            <Destinations></Destinations>
            <Map></Map>
            <NewsPapers></NewsPapers>
        </div>
    );
};

export default Home;