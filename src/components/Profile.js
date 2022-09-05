import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Loader from './Loader';

const Profile = () => {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false)
  }, [])

  return (
    <>
      {isLoading ? <Loader /> :
        <div>
          <h1 className="profile__heading">Wellcome</h1>
          <Link to="/list" className="profile__list">Просмотр сводной таблицы</Link>
        </div>}

    </>
  );
}

export default Profile;
