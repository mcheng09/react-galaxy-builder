import React from 'react';

import style from './GalaxyControl.module.css'

const GalaxyControl = (props) => {
  return (
    <div className={style.GalaxyControl}>
      <div className={style.Label}>{props.label}</div>
      <button onClick={props.removePlanet} disabled={props.disabled}>Remove</button>
      <button onClick={props.addPlanet}>Add</button>
    </div>
  )
};

export default GalaxyControl;
