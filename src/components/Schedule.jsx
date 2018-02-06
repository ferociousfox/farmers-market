import React from 'react';
import PropTypes from 'prop-types';

function Schedule(props) {
  return (
    <div>
      <h3>{props.location}</h3>
      <h4>{props.day}, {props.hours} - {props.booth}</h4>
    </div>
  );
}

Schedule.propTypes = {
  day: PropTypes.string,
  location: PropTypes.string,
  hours: PropTypes.string,
  booth: PropTypes.string
};

export default Schedule;
