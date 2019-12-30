import React from 'react';

import GalaxyControl from './GalaxyControl/GalaxyControl'
import style from './GalaxyControls.module.css';

const controls = [
  { label: 'Mercury', type:'mercury'},
  { label: 'Mars', type:'mars'},
  { label: 'Jupiter', type:'jupiter'},
  { label: 'Saturn', type:'saturn'}
]

const GalaxyControls = (props) => {
  return (
    <div className={style.GalaxyControls}>
      { controls.map((control, i) => {
        return <GalaxyControl label={control.label} type={control.type} key={control.label + i}/>
      })}
    </div>
  )
}

export default GalaxyControls;
