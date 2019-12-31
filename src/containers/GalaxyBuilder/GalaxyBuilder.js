import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'
import GalaxyControls from '../../components/Galaxy/GalaxyControls/GalaxyControls'

class GalaxyBuilder extends Component {

  state = {
    planets: {
      mercury: 0,
      mars: 0,
      jupiter: 0,
      saturn: 0
    }
  }

  //Methods
  addPlanetHandler = (type) => {
    const newPlanet = this.state.planets[type] + 1;
    let updatedPlanets = { ...this.state.planets };
    updatedPlanets[type] = newPlanet;
    this.setState({ planets: updatedPlanets })
  }

  removePlanetHandler = (type) => {
    const oldPlanet = this.state.planets[type] - 1;
    if (oldPlanet < 0) return;
    let updatedPlanets = { ...this.state.planets }
    updatedPlanets[type] = oldPlanet;
    this.setState({ planets: updatedPlanets });
  }

  render () {
    return (
        <div>
          <h1>Galaxy Builder Component</h1>
          <Galaxy planets={this.state.planets}/>
          <GalaxyControls addPlanet={this.addPlanetHandler} removePlanet={this.removePlanetHandler}/>
        </div>
    )
  }
}

export default GalaxyBuilder;
