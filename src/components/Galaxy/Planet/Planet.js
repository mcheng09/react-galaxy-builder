import React from 'react';
import PropTypes from 'prop-types'

import style from './Planet.module.css'

const planet = (props) => {
  let planet = null;

  switch(props.type) {
    case ('blue'):
      planet = <div className={style.Mercury}></div>;
      break;

    case ('red'):
      planet = <div className={style.Mars}></div>;
      break;

    case ('green'):
      planet = <div className={style.Jupiter}></div>;
      break;

    case ('yellow'):
      planet = <div className={style.Saturn}></div>;
      break;

    default:
        planet = null;
  }

  return planet;

}

planet.propTypes = {
  type: PropTypes.string.isRequired
};

export default planet;
