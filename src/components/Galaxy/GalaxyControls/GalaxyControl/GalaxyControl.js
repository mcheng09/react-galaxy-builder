import React from 'react';

import style from './GalaxyControl.module.css'

const GalaxyControl = (props) => {
  return (
    <div className={style.GalaxyControl}>
      <div className={style.Label}>{props.label}</div>
      <button>Less</button>
      <button>More</button>
    </div>
  )
};

export default GalaxyControl;
