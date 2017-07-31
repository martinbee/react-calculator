import React from 'react'; // Import react module
import { string } from 'prop-types';
import ScreenRow from '../ScreenRow';

const Screen = ({ equation, answer }) => {
  return (
    <div className="screen">
      <ScreenRow type="input" value={equation}/>
      <ScreenRow type="output" value={answer}/>
    </div>
  );
}

Screen.propTypes = {
  equation: string.isRequired,
  answer: string.isRequired
}

export default Screen;
