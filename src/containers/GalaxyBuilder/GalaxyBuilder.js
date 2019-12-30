import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'

class GalaxyBuilder extends Component {
  render () {
    return (
        <div>
          <h1>Galaxy Builder Component</h1>
          <Galaxy />
        </div>
    )
  }
}

export default GalaxyBuilder;
