import React from 'react';

import style from './Modal.module.css';

const modal = (props) => {
  return (
    <div
      className={style.Modal}
      style={{
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
    </div>
  )
};

export default modal;
