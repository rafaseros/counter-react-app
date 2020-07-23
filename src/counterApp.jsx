import React from 'react';
import PropTypes from 'prop-types';

const CounterApp = ({ value }) => {
  const handleAdd = (e) => {
    console.log(e);
  };

  return (
    <>
      <h1>Counter App</h1>
      <h2>{value}</h2>
      <button onClick={handleAdd}>Incrementar +1</button>
    </>
  );
};

CounterApp.propTypes = {
  value: PropTypes.number,
};

export default CounterApp;
