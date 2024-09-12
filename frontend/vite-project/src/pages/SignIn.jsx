import React from 'react';
import Header from '../components/Header.jsx';
import Footer from '../components/Footer.jsx';
import SignInContent from '../components/SingInContent.jsx.jsx';

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