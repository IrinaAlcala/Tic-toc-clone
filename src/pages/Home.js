import React from 'react';
import FollowersColumn from '../components/FollowersColumn'
import Card from '../components/Card'
import axios from 'axios'

const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <FollowersColumn />
            <Card />
            
        </div>
    );
}

export default Home;