import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import UserContent from '../components/UserContent';


const User = () => {
    return (
        <div className='user'>
          <Header />
          <UserContent />
          <Footer />
        </div>
    );
};

export default User;