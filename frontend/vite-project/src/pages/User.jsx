import React from 'react';
import Footer from '../components/Footer.jsx';
import Header from '../components/Header.jsx';
import UserContent from '../components/UserContent.jsx';


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