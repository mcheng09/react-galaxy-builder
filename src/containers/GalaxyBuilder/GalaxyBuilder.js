import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'
import GalaxyControls from '../../components/Galaxy/GalaxyControls/GalaxyControls'

const PLANET_COST = {
  blue: 100,
  red: 200,
  green: 300,
  yellow: 400
}

class GalaxyBuilder extends Component {

  state = {
    planets: {
      blue: 0,
      red: 0,
      green: 0,
      yellow: 0
    },
    totalCost: 0
  }

  //Methods
  addPlanetHandler = (type) => {
    const newPlanet = this.state.planets[type] + 1;
    let updatedPlanets = { ...this.state.planets };
    updatedPlanets[type] = newPlanet;

    const addedCost = PLANET_COST[type];
    const newCost = this.state.totalCost + addedCost;

    this.setState({ planets: updatedPlanets, totalCost: newCost })
  }

  removePlanetHandler = (type) => {
    const oldPlanet = this.state.planets[type] - 1;
    if (oldPlanet < 0) return;
    let updatedPlanets = { ...this.state.planets }
    updatedPlanets[type] = oldPlanet;

    const removedCost = PLANET_COST[type];
    const newCost = this.state.totalCost - removedCost;

    this.setState({ planets: updatedPlanets, totalCost: newCost });
  }

  render () {
    return (
        <div>
          <Galaxy planets={this.state.planets}/>
          <GalaxyControls
            cost={this.state.totalCost}
            addPlanet={this.addPlanetHandler}
            removePlanet={this.removePlanetHandler}
          />
        </div>
    )
  }
}

export default GalaxyBuilder;
