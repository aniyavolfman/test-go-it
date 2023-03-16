import React from 'react';
import PropTypes from 'prop-types';

export default function UsersItem({
  id,
  user,
  tweets,
  followers,
  avatar,
  onClick,
  textContentBtn,
}) {
  let formattedFollowersFirst = followers.toString().slice(0, 3).split(' ');
  let formattedFollowersSecond = followers.toString().slice(3).split(' ');
  let arr = [formattedFollowersFirst, formattedFollowersSecond];

  return (
    <li>
      <img src={avatar} alt="Avatar" width="300" />
      <p>{user}</p>
      <p>{tweets}</p>
      <p>{arr.join(',')}</p>
      <button type="button" id={id} onClick={onClick}>
        {textContentBtn[0]?.textContent.toLowerCase()}
      </button>
    </li>
  );
}

UsersItem.propTypes = {
  id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  user: PropTypes.string.isRequired,
  tweets: PropTypes.number.isRequired,
  followers: PropTypes.number.isRequired,
  avatar: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  textContentBtn: PropTypes.array.isRequired,
};
