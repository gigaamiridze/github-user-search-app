import React, { useEffect } from 'react';
import { useUser } from '../../context/UserContext';
// Importing components
import TopArea from './TopArea/TopArea';
import Statistic from './Statistic/Statistic';
import Links from './Links/Links';
import Loader from '../Loader/Loader';

function UserData() {
  const { getUser, loading } = useUser();

  useEffect(() => {
    getUser('octocat');
  }, []);

  return (
    <div className='user-card'>
      {loading ? (
        <Loader />
      ) : (
        <div className='card-content'>
          <TopArea />
          <Statistic />
          <Links />
        </div>
      )}
    </div>
  )
}

export default UserData;