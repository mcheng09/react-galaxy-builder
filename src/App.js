import React, { Component } from 'react';

import Layout from './components/Layout/Layout';
import GalaxyBuilder from './containers/GalaxyBuilder/GalaxyBuilder';

class App extends Component {
  render () {
    return (
      <div className="App">
        <Layout />
        <GalaxyBuilder />
      </div>
    );
  }
}

export default App;
