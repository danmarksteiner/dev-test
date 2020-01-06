import React from 'react';
import PropTypes from 'prop-types';
import BpkCard from 'bpk-component-card';
import BpkButton from 'bpk-component-button';

import DisplayLegs from '../DisplayLegs';

import STYLES from './FlightCard.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const FlightCard = props => {
  if (props.itineraries) {
    return (
      <div className="flight-list">
        {props.itineraries.map(itinerary => (
          <BpkCard key={itinerary.id} className={getClassName('flight-card')}>
            {itinerary.legs.map(currentLeg => (
              <DisplayLegs
                currentLeg={currentLeg}
                legsList={props.legs}
                key={currentLeg.match(/\d+/)}
              />
            ))}
            <div className={getClassName('flight-price')}>
              <div>
                <div className={getClassName('flight-total')}>
                  {itinerary.price}
                </div>
                <div className={getClassName('flight-agent')}>
                  {itinerary.agent}
                </div>
              </div>
              <div className={getClassName('flight-button')}>
                <BpkButton>Select</BpkButton>
              </div>
            </div>
          </BpkCard>
        ))}
      </div>
    );
  }
  return <div>Loading</div>;
};

FlightCard.propTypes = {
  itineraries: PropTypes.objectOf(PropTypes.string),
  legs: PropTypes.objectOf(PropTypes.string),
};
FlightCard.defaultProps = { itineraries: {}, legs: {} };

export default FlightCard;
