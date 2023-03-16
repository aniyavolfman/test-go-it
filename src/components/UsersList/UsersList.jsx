import UsersItem from 'components/UsersItem/UsersItem';
import React from 'react';


export default function UsersList({ users, onClick }) {
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
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
