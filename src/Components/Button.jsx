import React from 'react';
import { FaChevronDown, FaTimesCircle } from 'react-icons/fa';
import PropTypes from 'prop-types';

const Button = ({ title, onClick, showTodo }) => {
  return (
    <button
      className={`create-btn ${showTodo ? 'close' : ''}`}
      onClick={onClick}
    >
      {title}
      {showTodo ? (
        <FaTimesCircle style={{ fontSize: '0.75rem' }} />
      ) : (
        <FaChevronDown style={{ fontSize: '0.65rem' }} />
      )}
    </button>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
};

export default Button;
