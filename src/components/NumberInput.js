import React from 'react';

function NumberInput({ placeholder = '?', setValueProp, isDisabled = false }) {
  return (
    // <input type="number" placeholder="Write the value of" style={{fontSize: 24}}/>
    <input
      type="number"
      // placeholder={`Write the value of ${placeholder}`}
      placeholder={placeholder}
      disabled={isDisabled}
      onChange={(e) => setValueProp(parseFloat(e.target.value))}
      style={style}
    />
  );
}

const style = {
  display: 'block',
  margin: '10px 0',
};

export default NumberInput;
