import React, { useState } from 'react';

const UserInfoComponent = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem('registrationData'));

  const [newUsername, setNewUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');

  const handleUsernameChange = () => {
    if (newUsername) {
      // Update the state or perform API call to update the username
      setNewUsername('');
      alert('Username changed successfully!');
    }
  };

  const handlePasswordChange = () => {
    if (newPassword) {
      // Update the state or perform API call to update the password
      setNewPassword('');
      alert('Password changed successfully!');
    }
  };

  return (
    <div>
      <h2>User Information</h2>
      {userData ? (
        <div>
          <div>
            <strong>Email:</strong> {userData.email}
          </div>
          <div>
            <strong>Username:</strong> {userData.username}
          </div>
          <div>
            <h3>Change Username</h3>
            <input
              type="text"
              placeholder="Enter new username"
              value={newUsername}
              onChange={(e) => setNewUsername(e.target.value)}
            />
            <button onClick={handleUsernameChange}>Change Username</button>
          </div>
          <div>
            <h3>Change Password</h3>
            <input
              type="password"
              placeholder="Enter new password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            />
            <button onClick={handlePasswordChange}>Change Password</button>
          </div>
        </div>
      ) : (
        <div>No user data available</div>
      )}
    </div>
  );
};

export default UserInfoComponent;
