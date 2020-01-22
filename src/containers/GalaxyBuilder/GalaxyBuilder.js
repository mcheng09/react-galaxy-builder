import React, { Component } from 'react';

import Galaxy from '../../components/Galaxy/Galaxy'
import GalaxyControls from '../../components/Galaxy/GalaxyControls/GalaxyControls'
import Modal from '../../components/UI/Modal/Modal'
import GalaxyReview from '../../components/Galaxy/GalaxyReview/GalaxyReview'

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
    totalCost: 0,
    reviewable: false,
    openModal: false
  }

  //Methods
  updatedReviewState (planets) {
    const sum = Object.keys(planets)
      .map(planet => {
        return planets[planet]
      })
      .reduce((sum, el) => {
        return sum + el;
      }, 0)

    this.setState({ reviewable: sum > 0});
  }

  addPlanetHandler = (type) => {
    const newPlanet = this.state.planets[type] + 1;
    let updatedPlanets = { ...this.state.planets };
    updatedPlanets[type] = newPlanet;

    const addedCost = PLANET_COST[type];
    const newCost = this.state.totalCost + addedCost;

    this.setState({ planets: updatedPlanets, totalCost: newCost });
    this.updatedReviewState(updatedPlanets);
  }

  removePlanetHandler = (type) => {
    const oldPlanet = this.state.planets[type] - 1;
    if (oldPlanet < 0) return;
    let updatedPlanets = { ...this.state.planets }
    updatedPlanets[type] = oldPlanet;

    const removedCost = PLANET_COST[type];
    const newCost = this.state.totalCost - removedCost;

    this.setState({ planets: updatedPlanets, totalCost: newCost });
    this.updatedReviewState(updatedPlanets);
  }

  openModalHandler = () => {
    this.setState({ openModal: true });
  }

  closeModalHandler = () => {
    this.setState({ openModal: false });
  }

  continueReviewHandler = () => {
    alert('To be continued!');
  }

  render () {

    // Set planets to true/false and pass down the info
    const disabledInfo = {
      ...this.state.planets
    };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0
    }

    return (
        <div>
          <Modal show={this.state.openModal} modalClosed={this.closeModalHandler}>
            <GalaxyReview
              planets={this.state.planets}
              closeModal={this.closeModalHandler}
              continueReview={this.continueReviewHandler}
              cost={this.state.totalCost}
              />
          </Modal>
          <Galaxy planets={this.state.planets}/>
          <GalaxyControls
            cost={this.state.totalCost}
            reviewable={!this.state.reviewable}
            addPlanet={this.addPlanetHandler}
            removePlanet={this.removePlanetHandler}
            disabled={disabledInfo}
            openModal={this.openModalHandler}
          />
        </div>
    )
  }
}

export default GalaxyBuilder;
