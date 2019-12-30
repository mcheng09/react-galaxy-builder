import React from 'react';

import Planet from './Planet/Planet'

const galaxy = (props) => {

  let transformedPlanets = Object.keys(props.planets)
    .map(planet => {
      return [...Array(props.planets[planet])].map((_, i) => {
        return <Planet key={planet + i} type={planet} />
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

    if (transformedPlanets.length < 1) {
      transformedPlanets = <p>Start Building Your Galaxy!</p>
    }

  return (
    <div className='Galaxy'>
      { transformedPlanets }
    </div>
  )
}

export default galaxy;
