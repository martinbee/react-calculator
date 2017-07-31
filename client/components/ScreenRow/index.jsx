import React from 'react';
import { string } from 'prop-types';

const ScreenRow = ({ type, value }) => {
  const getInputClasses = () => {
    if (type === 'input') return 'input-screen col-xs-12';

    return 'output-screen col-xs-12';
  }

  return (
    <div className="row">
      <input className={getInputClasses()} type="text" readOnly value={value}/>
    </div>
  );
};

ScreenRow.propTypes = {
  type: string.isRequired,
  value: string.isRequired
};

export default ScreenRow;
