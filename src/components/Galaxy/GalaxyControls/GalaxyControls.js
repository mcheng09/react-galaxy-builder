import React from 'react';

import style from './GalaxyControls.module.css';

const GalaxyControls = (props) => {
  return (
    <div className={style.GalaxyControls}>
      <div className={style.Container}>
        <div className={style.Label}>{props.label}</div>
        <button>Remove</button>
        <button>Add</button>
      </div>
    </div>
  )
}

export default GalaxyControls;
