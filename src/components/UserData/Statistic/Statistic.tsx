import React from 'react';
import { useUser } from '../../../context/UserContext';

function Statistic() {
  const { user } = useUser();

  return (
    <div className='statistic-box'>
      <div className='stat-wrapper'>
        <h6>repos</h6>
        <span>{user?.public_repos}</span>
      </div>
      <div className='stat-wrapper'>
        <h6>followers</h6>
        <span>{user?.followers}</span>
      </div>
      <div className='stat-wrapper'>
        <h6>following</h6>
        <span>{user?.following}</span>
      </div>
    </div>
  )
}

export default Statistic;