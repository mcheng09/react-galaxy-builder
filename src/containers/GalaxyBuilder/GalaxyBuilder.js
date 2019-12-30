import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'

class GalaxyBuilder extends Component {

  state = {
    planets: {
      mercury: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0
    }
  }

  render () {
    return (
        <div>
          <h1>Galaxy Builder Component</h1>
          <Galaxy planets={this.state.planets}/>
        </div>
    )
  }
}

export default GalaxyBuilder;
