import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Modal from './modal/Modal.jsx';
import { fetchUserProfile } from '../features/auth/authSlice'; // Importez l'action pour rafraîchir les informations de l'utilisateur
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const UserContent = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const token = useSelector((state) => state.auth.token); // Récupérez le token pour l'authentification
  const [isEditing, setIsEditing] = useState(false);
  const [userName, setUserName] = useState(user?.userName || ''); // Utilisez userName avec la majuscule "N"

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userName }), // Envoyez "userName" dans la requête PUT
      });

      if (!response.ok) {
        throw new Error('Failed to update userName');
      }

      // Si la mise à jour est réussie, rafraîchissez les informations de l'utilisateur
      dispatch(fetchUserProfile());
      setIsEditing(false); // Ferme la modal après la sauvegarde
    } catch (error) {
      console.error('Error updating userName:', error);
      // Gérez l'erreur si nécessaire (par exemple, afficher un message d'erreur)
    }
  };

  const handleCancel = () => {
    setIsEditing(false);
    setUserName(user?.userName || '');
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user?.userName}!</h1>
        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      </div>

      {/* Modal pour l'édition du nom d'utilisateur */}
      <Modal isOpen={isEditing} onClose={handleCancel}>
      <FontAwesomeIcon icon={faCircleUser} className="fa fa-user-circle sign-in-icon"/>
        <h2>Edit user info</h2> {/* Titre ajouté */}
        <form className="edit-form" onSubmit={handleSave}>
          <div className="input-wrapper">
            <label htmlFor="userName">Username</label>
            <input
              type="text"
              id="userName"
              value={userName} // Utilisez "userName"
              onChange={(e) => setUserName(e.target.value)} // Mettez à jour "userName" lors du changement
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              value={user?.firstName}
              disabled // Désactivé pour éviter la modification
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              value={user?.lastName}
              disabled // Désactivé pour éviter la modification
            />
          </div>
          <div className='edit-buttons'>
            <button className='edit-name-button' type="submit">Save</button>
            <button className='edit-name-button' type="button" onClick={handleCancel}>Cancel</button>
          </div>  
        </form>
      </Modal>

      {/* Détails des comptes de l'utilisateur */}
      <h2 className="sr-only">Accounts</h2>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Checking (x8349)</h3>
          <p className="account-amount">$2,082.79</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Savings (x6712)</h3>
          <p className="account-amount">$10,928.42</p>
          <p className="account-amount-description">Available Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">Argent Bank Credit Card (x8349)</h3>
          <p className="account-amount">$184.30</p>
          <p className="account-amount-description">Current Balance</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    </main>
  );
};

export default UserContent;
