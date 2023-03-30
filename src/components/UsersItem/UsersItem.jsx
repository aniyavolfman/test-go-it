import React from 'react';
import PropTypes from 'prop-types';
import css from './UsersItem.module.scss';
import { Button } from 'components/Button/Button';
import { Text } from 'components/Text/Text';

export default function UsersItem({
  id,
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
    <li className={css.card}>
      <div className={css.top}>
        <img src={avatar} alt="Avatar" width="59" className={css.avatar} />
      </div>
      <div className={css.bottom}>
        <Text tweets={tweets} arr={arr} />
        <Button id={id} onClick={onClick} textContentBtn={textContentBtn} />
      </div>
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
