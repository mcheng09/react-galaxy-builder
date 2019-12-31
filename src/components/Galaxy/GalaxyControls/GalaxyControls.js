import React from 'react';

import GalaxyControl from './GalaxyControl/GalaxyControl'
import style from './GalaxyControls.module.css';

const controls = [
  { label: 'Blue Planet', type:'blue'},
  { label: 'Red Planet', type:'red'},
  { label: 'Green Planet', type:'green'},
  { label: 'Yellow Planet', type:'yellow'}
]

const GalaxyControls = (props) => {
  return (
    <div className={style.GalaxyControls}>
      <p>This galaxy will cost you <strong>${props.cost}</strong></p>
      { controls.map((control, i) => {
        return <GalaxyControl
                  label={control.label}
                  type={control.type}
                  key={control.label + i}
                  addPlanet={() => props.addPlanet(control.type)}
                  removePlanet={() => props.removePlanet(control.type)}
                />
      })}
    </div>
  )
}

export default GalaxyControls;
