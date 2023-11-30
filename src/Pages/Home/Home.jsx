import React from 'react';
import Banner from '../../Components/Banner/Banner';
import NavBar from './../Shared/NavBar/NavBar';
import Sponsers from '../../Components/Sponsers/Sponsers';
import FeatureSowcase from '../../Components/FeatureSowCase/FeatureSowcase';
import Pratners from '../../Components/Prateners/Pratners';
import Howmany from '../../Components/howmay/Howmany';
import FeedBack from '../../Components/FeedBack/FeedBack';
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import NewsLatter from '../../Components/NewsLatters/NewsLatter';


const Home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Banner></Banner>
            <h1 className='text-2xl font-semibold text-center pt-10 pb-9 text-black'>Learn from 275+ leading universities and companies with EvoLearn Plus</h1>
            <Sponsers ></Sponsers>
            <FeatureSowcase data-aos="zoom-in"></FeatureSowcase>
            <Howmany data-aos="zoom-in"></Howmany >
            <SectionTitle heading="Our StudentS Feed Back" subHeading='FeedBack'></SectionTitle>
            <FeedBack data-aos="zoom-in"></FeedBack>
            <Pratners data-aos="zoom-in"></Pratners>
            <NewsLatter data-aos="zoom-in"></NewsLatter>
        </div>
    );
};

export default Home;
