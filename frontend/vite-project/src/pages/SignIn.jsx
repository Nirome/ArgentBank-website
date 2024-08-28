import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SignInContent from '../components/SignInContent';

const SignIn = () => {
    return (
        <div className='sign-in'>
            <Header />
            <SignInContent />
            <Footer />
        </div>
    );
};

export default SignIn;