import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Modal from './modal/Modal.jsx'; // Importez le composant Modal

const UserContent = () => {
  const user = useSelector((state) => state.auth.user);
  const [isEditing, setIsEditing] = useState(false); // État pour gérer l'affichage de la modal
  const [username, setUsername] = useState(user?.username || ''); // Champ modifiable

  const handleEditClick = () => {
    setIsEditing(true); // Affiche la modal lorsque l'utilisateur clique sur "Edit Name"
  };

  const handleSave = (e) => {
    e.preventDefault();
    // Ajouter la logique pour sauvegarder le nouveau username ici, par exemple en faisant un appel API
    setIsEditing(false); // Cache la modal après la sauvegarde
  };

  const handleCancel = () => {
    setIsEditing(false); // Cache la modal si l'utilisateur annule
    setUsername(user?.username || '');
  };

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{user?.userName}!</h1>
        <button className="edit-button" onClick={handleEditClick}>Edit Name</button>
      </div>

      {/* Modal pour l'édition du nom d'utilisateur */}
      <Modal isOpen={isEditing} onClose={handleCancel}>
        <h2>Edit user info</h2>
        <form className="edit-form" onSubmit={handleSave}>
          <div className="input-wrapper">
            <label htmlFor="username">User name</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="firstName">First name</label>
            <input
              type="text"
              id="firstName"
              value={user?.firstName}
              disabled // Désactivé pour éviter la modification
            />
          </div>
          <div className="input-wrapper">
            <label htmlFor="lastName">Last name</label>
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
