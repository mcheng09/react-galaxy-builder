import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'

class GalaxyBuilder extends Component {

  state = {
    planets: {
      mercury: 1,
      mars: 2,
      jupiter: 1,
      saturn: 1
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
