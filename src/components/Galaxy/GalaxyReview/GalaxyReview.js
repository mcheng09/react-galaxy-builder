import React from 'react';

const galaxyReview = (props) => {
  const planetSummary = Object.keys(props.planets)
    .map(planet => {
      return <li key={planet}><span>{planet}</span>: {props.planets[planet]}</li>
    })

  return (
    <div>
      <h3>Your Galaxy Contains:</h3>
      <ul>{planetSummary}</ul>
      <p>Continue to next step.</p>
    </div>
  )
};

export default galaxyReview;
