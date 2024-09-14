import React from 'react';
import Footer from '../../components/Footer/Index';
import Header from '../../components/Header/Index';
import UserContent from '../../components/UserContent/Index';

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