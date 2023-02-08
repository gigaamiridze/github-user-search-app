import React from 'react';
import { useUser } from '../../../context/UserContext';
import { joinedDate } from '../../../utils/formatter';

function TopArea() {
  const { user } = useUser();

  return (
    <div className='head-info'>
      <div className='wrapper-box'>
        <div className='img-box'>
          <img src={user?.avatar_url} alt="Avatar" />
        </div>
        <div className='base-info'>
          <h3 className='full-name'>{user?.name}</h3>
          <a
            href={user?.html_url}
            className='account-link'
            target='_blank'
            rel='noreferrer'
          >
            @{user?.login}
          </a>
          <p className='bio'>{user?.bio ? user.bio : 'This profile has no bio.'}</p>
        </div>
      </div>
      <p className='joined-date'>{joinedDate(user?.created_at)}</p>
    </div>
  );
}

export default TopArea;