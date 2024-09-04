import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import User from './pages/User';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/sign-in' element={<SignIn />} /> 
        <Route path='/user' element={
          <ProtectedRoute>
            <User />
          </ProtectedRoute>} 
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;