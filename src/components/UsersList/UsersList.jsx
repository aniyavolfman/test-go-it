import React from 'react';
import PropTypes from 'prop-types';
import UsersItem from 'components/UsersItem/UsersItem';

export default function UsersList({ users, onClick, textContentBtn }) {
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
          textContentBtn={textContentBtn.filter(
            el => Number(el.id) === Number(id)
          )}
        />
      ))}
    </ul>
  );
}

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      user: PropTypes.string.isRequired,
      tweets: PropTypes.number.isRequired,
      followers: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
    })
  ),
  onClick: PropTypes.func.isRequired,
  textContentBtn: PropTypes.array.isRequired,
};
