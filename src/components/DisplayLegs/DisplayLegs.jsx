import React from 'react';
import PropTypes from 'prop-types';
import BpkSmallLongArrowRight from 'bpk-component-icon/sm/long-arrow-right';

import convertTimeHoursMins from '../Utilities/convertTime';

import STYLES from './DisplayLegs.scss';

const getClassName = className => STYLES[className] || 'UNKNOWN';

const DisplayLegs = props => {
  const { legsList } = props;

  // Find legs that match the current itineraries legs
  const matchedLegs = legsList.filter(
    currentLeg => currentLeg.id === props.currentLeg,
  );

  // Render stops
  let stops;
  const numberOfStops = matchedLegs[0].stops;
  if (numberOfStops === 0) {
    stops = <span className={getClassName('stops-direct')}>Direct</span>;
  } else if (numberOfStops === 1) {
    stops = <span className={getClassName('stops')}>1 stop</span>;
  } else {
    stops = (
      <span className={getClassName('stops')}>{numberOfStops} stops</span>
    );
  }

  return (
    <div className={getClassName('flight-card-legs')} key={matchedLegs[0].id}>
      <div
        className={getClassName(
          `flight-card-airline-icon-${matchedLegs[0].airline_id}`,
        )}
      />
      <div>
        <div>
          <span className={getClassName('flight-card-time')}>
            {matchedLegs[0].departure_time.split('T')[1]}
          </span>
        </div>
        <div>
          <span className={getClassName('flight-card-airport')}>
            {matchedLegs[0].departure_airport}
          </span>
        </div>
      </div>
      <div className={getClassName('flight-card-icon-arrow')}>
        <BpkSmallLongArrowRight
          className={getClassName('flight-card-icon__long-arrow-right')}
        />
      </div>
      <div>
        <div>
          <span className={getClassName('flight-card-time')}>
            {matchedLegs[0].arrival_time.split('T')[1]}
          </span>
        </div>
        <div>
          <span className={getClassName('flight-card-airport')}>
            {matchedLegs[0].arrival_airport}
          </span>
        </div>
      </div>
      <div className={getClassName('flight-card-duration')}>
        <div>
          <span>{convertTimeHoursMins(matchedLegs[0].duration_mins)}</span>
        </div>
        <div>{stops}</div>
      </div>
    </div>
  );
};

DisplayLegs.propTypes = {
  currentLeg: PropTypes.string,
  legsList: PropTypes.objectOf(PropTypes.string),
};
DisplayLegs.defaultProps = { currentLeg: '', legsList: {} };

export default DisplayLegs;
