import React, { useState, useEffect } from 'react';
import './style.css';
import TestFunction from './components/Test';
import NumberInput from './components/NumberInput';
import CalculateButton from './components/CalculateButton';
import CalculatorButton from './components/CalculatorButton';
// import OperatorButton from './components/OperatorButton';

export default function App() {
  const [a, setA] = useState(0);
  const [b, setB] = useState(0);
  const [c, setC] = useState(0);
  const [result, setResult] = useState(0);
  const [temp, setTemp] = useState('');
  const [accumulatedTemps, setAccumulatedTemps] = useState('');

  useEffect(() => {
    console.log('The value of temp has changed to:', temp);
    // Add your behavior here
    setAccumulatedTemps(accumulatedTemps + '' + temp);
    // accumulatedTemps = accumulatedTemps+"x"+temp
    console.log('accumulatedTemps:', accumulatedTemps);
  }, [temp]);

  return (
    <div>
      <div id="calculator" style={CalculatorStyle}>
        <NumberInput placeholder={accumulatedTemps} isDisabled={true} />
        <CalculatorButton value={1} text={1} setTemp={setTemp} />
        <CalculatorButton value={2} text={2} setTemp={setTemp} />
        <CalculatorButton value={3} text={3} setTemp={setTemp} />
        <CalculatorButton value={4} text={4} setTemp={setTemp} />
        <CalculatorButton value={5} text={5} setTemp={setTemp} />
        <CalculatorButton value={6} text={6} setTemp={setTemp} />
        <CalculatorButton value={7} text={7} setTemp={setTemp} />
        <CalculatorButton value={8} text={8} setTemp={setTemp} />
        <CalculatorButton value={9} text={9} setTemp={setTemp} />
        <CalculatorButton value={0} text={0} setTemp={setTemp} />
        {/* <OperatorButton value={"="} text={"="} setTemp={setTemp}/> */}
      </div>

      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <TestFunction />
      <NumberInput placeholder={'Enter the value of a'} setValueProp={setA} />
      <NumberInput placeholder={'Enter the value of b'} setValueProp={setB} />
      <NumberInput placeholder={'Enter the value of c'} setValueProp={setC} />
      <CalculateButton values={[a, b, c]} setResultProp={setResult} />
      <NumberInput placeholder={result} isDisabled={true} />
    </div>
  );
}

const CalculatorStyle = {
  border: '1px solid black',
  width: '200px',
  height: '300px',
};

// problem is
//useEffect only detects when the value changes, but what if I click the same button/value?
//
//is the only solution to use setState upon child's onClick?
