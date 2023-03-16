import React from 'react';
import PropTypes from 'prop-types';
import css from './UsersItem.module.scss';

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

  const styleArr = [];
  if (textContentBtn[0]?.textContent === 'follow') {
    styleArr.push(css.button);
  } else {
    styleArr.push(css.buttonActive);
  }
  return (
    <li className={css.card}>
      <div className={css.top}>
        <img src={avatar} alt="Avatar" width="59" className={css.avatar} />
      </div>
      <div className={css.bottom}>
        <p className={css.text}>{tweets} tweets</p>
        <p className={css.text}>{arr.join(',')} followers</p>
        <button type="button" id={id} onClick={onClick} className={styleArr}>
          {textContentBtn[0]?.textContent}
        </button>
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
