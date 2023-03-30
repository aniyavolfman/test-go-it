import React from 'react'
import css from './Button.module.scss'

export function Button({ id, onClick, textContentBtn}) {
     const styleArr = [];
     if (textContentBtn[0]?.textContent === 'follow') {
       styleArr.push(css.button);
     } else {
       styleArr.push(css.buttonActive);
     }
   
  return (
    <button type="button" id={id} onClick={onClick} className={styleArr}>
      {textContentBtn[0]?.textContent}
    </button>
  );
}
