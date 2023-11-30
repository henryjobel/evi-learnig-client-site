import React from 'react';
import Banner from '../../Components/Banner/Banner';
import NavBar from './../Shared/NavBar/NavBar';
import Sponsers from '../../Components/Sponsers/Sponsers';
import FeatureSowcase from '../../Components/FeatureSowCase/FeatureSowcase';
import Pratners from '../../Components/Prateners/Pratners';
import Howmany from '../../Components/howmay/Howmany';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <h1 className='text-2xl font-semibold text-center pt-10 pb-9 text-black'>Learn from 275+ leading universities and companies with EvoLearn Plus</h1>
            <Sponsers></Sponsers>
            <FeatureSowcase></FeatureSowcase>
            <Howmany></Howmany>
            <Pratners></Pratners>
        </div>
    );
};

export default Home;
