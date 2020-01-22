import React from 'react';

import Button from './../../UI/Button/Button'

const galaxyReview = (props) => {
  const planetSummary = Object.keys(props.planets)
    .map(planet => {
      return <li key={planet}><span>{planet}</span>: {props.planets[planet]}</li>
    })

  return (
    <div>
      <h3>Your Galaxy Contains:</h3>
      <ul>{planetSummary}</ul>
      <p><strong>Total Cost: ${props.cost}</strong></p>
      <p>Continue to next step.</p>
      <Button btnType='Danger' clicked={props.closeModal}>CANCEL</Button>
      <Button btnType='Success' clicked={props.continueReview}>CONTINUE</Button>
    </div>
  )
};

export default galaxyReview;
