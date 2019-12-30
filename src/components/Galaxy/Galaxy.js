import React from 'react';

import Planet from './Planet/Planet';
import GalaxyControls from './GalaxyControls/GalaxyControls';

const galaxy = (props) => {

  // Map out Planets into Objects in Array
  let transformedPlanets = Object.keys(props.planets)
    .map(planet => {
      return [...Array(props.planets[planet])].map((_, i) => {
        return <Planet key={planet + i} type={planet} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  // Check if any Planets exist
    if (transformedPlanets.length < 1) {
      transformedPlanets = <p>Start Building Your Galaxy!</p>
    }

  return (
    <div className='Galaxy'>
      { transformedPlanets }
      <GalaxyControls />
    </div>
  )
}

export default galaxy;
