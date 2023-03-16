import UsersItem from 'components/UsersItem/UsersItem';
import React from 'react';
import users from '../../data/users.json';

export default function UsersList() {
    function handleOnClick(event) {
        console.log(event.target.id)
    }
  return (
    <ul>
      {users.map(({ id, user, tweets, followers, avatar }) => (
        <UsersItem
          key={id}
          user={user}
          tweets={tweets}
          followers={followers}
          avatar={avatar}
              id={id}
              onClick={handleOnClick}
        />
      ))}
    </ul>
  );
}
