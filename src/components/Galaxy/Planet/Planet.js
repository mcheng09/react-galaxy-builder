import React from 'react';

import style from './Planet.module.css'

const planet = (props) => {
  let planet = null;

  switch(props.type) {
    case ('mercury'):
      planet = <div className={style.Mercury}></div>;
      break;

    case ('mars'):
      planet = <div className={style.Mars}></div>;
      break;

    case ('jupiter'):
      planet = <div className={style.Jupiter}></div>;
      break;

    case ('saturn'):
      planet = <div className={style.Saturn}></div>;
      break;

    default:
        planet = null;
  }

  return planet;

}

export default planet;
