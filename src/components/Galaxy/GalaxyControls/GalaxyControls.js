import React from 'react';

import GalaxyControl from './GalaxyControl/GalaxyControl'
import style from './GalaxyControls.module.css';

const GalaxyControls = (props) => {
  return (
    <div className={style.GalaxyControls}>
      <GalaxyControl />
    </div>
  )
}

export default GalaxyControls;
