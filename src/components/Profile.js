import React from 'react';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (
    <>
      <span>Wellcome</span>
      <Link to="/list">Таблица</Link>
    </>
  );
}

export default Profile;
