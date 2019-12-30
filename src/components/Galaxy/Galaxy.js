import React from 'react';

import Planet from './Planet/Planet'

const galaxy = (props) => {
  return (
    <div className='Galaxy'>
      <h1>Galaxy Component</h1>
      <Planet type='mercury' />
      <Planet type='mars' />
      <Planet type='mars' />
      <Planet type='jupiter' />
      <Planet type='saturn' />
    </div>
  )
}

export default galaxy;
