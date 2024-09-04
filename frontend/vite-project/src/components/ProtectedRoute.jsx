import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const location = useLocation();

  if (!isAuthenticated) {
    // Si l'utilisateur n'est pas authentifié, redirigez-le vers la page de connexion
    // et stockez l'URL d'origine pour une redirection après connexion
    return <Navigate to="/sign-in" state={{ from: location }} />;
  }

  // Si l'utilisateur est authentifié, rendre le composant enfant
  return children;
};

export default ProtectedRoute;
