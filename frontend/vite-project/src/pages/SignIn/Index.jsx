import React from 'react';
import Header from '../../components/Header/Index';
import Footer from '../../components/Footer/Index';
import SignInContent from '../../components/SignInContent/Index';

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