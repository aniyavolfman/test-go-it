import React from 'react';
import css from './Text.module.scss';

export function Text({ tweets, arr }) {
  return (
    <>
      <p className={css.text}>{tweets} tweets</p>
      <p className={css.textLast}>{arr.join(',')} followers</p>
    </>
  );
}
