import React from 'react';

function CalculateButton({ values, setResultProp }) {
  return (
    <button
      className="calculate-button"
      style={style}
      onClick={() => CalculateFunction(values, setResultProp)}
      // onClick={() => CalculateFunction(values)}
    >
      calc
    </button>
  );
}

const style = {
  backgroundColor: 'black',
  color: 'white',
  margin: '0 0 0 70px',
  cursor: 'pointer',
};

function CalculateFunction(values, setResultProp) {
  let result = values[0] + values[1] + values[2];
  console.log('values: ', values);
  setResultProp(result);
}

// function CalculateFunction(values) {
//   console.log('values: ', values);
// }

export default CalculateButton;
