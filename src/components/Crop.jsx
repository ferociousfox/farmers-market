import React from 'react';
import PropTypes from 'prop-types';

function Crop(props){
  return(
    <div className='flexChild'>
      <h2>{props.month}</h2>
      <ul>
        {props.selection.map((selection, index) =>
          <li key={ index }>{selection}</li>
        )}
      </ul>
      <style jsx>{`
         ul {
          list-style: none;
        }
        .flexChild {
          width: 25%;
          height: 750px;
        }
      `}</style>
    </div>
  );
}

Crop.propTypes = {
  month: PropTypes.string,
  selection: PropTypes.arrayOf(PropTypes.string)
};

export default Crop;
