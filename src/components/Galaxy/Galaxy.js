import React from 'react';

import Planet from './Planet/Planet'

const galaxy = (props) => {

  const transformedPlanets = Object.keys(props.planets)
    .map(planet => {
      return [...Array(props.planets[planet])].map((_, i) => {
        return <Planet key={planet + i} type={planet} />
      });
    });

  return (
    <div className='Galaxy'>
      { transformedPlanets }
    </div>
  )
}

export default galaxy;
