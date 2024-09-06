import React from 'react';
import Header from '../../components/Header/Index';
import Hero from '../../components/Hero/Index';
import Footer from "../../components/Footer/Index";
import Features from '../../components/Features/Index';

const Home = () => {
    return (
        <div>
            <Header />
            <Hero />
            <Features />
            <Footer />
        </div>
    );
};

export default Home;