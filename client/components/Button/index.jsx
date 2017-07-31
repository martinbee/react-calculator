import React from 'react';
import { string, func } from 'prop-types';
import classNames from 'classnames';

const Button = ({ buttonClasses, type, handleClick, label }) => {
  const getButtonClass = () => {
    const isTypeAction = type === 'action';

    return classNames(
      'i-btn',
      buttonClasses,
      {
        'action-button': isTypeAction,
        'input-button': !isTypeAction,
      },
    );
  };

  return (
    <input
      type="button"
      className={getButtonClass()}
      onClick={handleClick}
      value={label}
    />
  );
}

Button.propTypes = {
  buttonClasses: string,
  type: string.isRequired,
  handleClick: func.isRequired,
  label: string.isRequired
}

export default Button;
