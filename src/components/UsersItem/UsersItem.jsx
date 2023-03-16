import React from 'react';

export default function UsersItem({ id, user, tweets, followers, avatar, onClick }) {
  return (
    <li>
      <img src={avatar} alt="Avatar" width="300" />
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{followers}</p>
      <button type="button" id={id} onClick={onClick}>
        Follow
      </button>
    </li>
  );
}
