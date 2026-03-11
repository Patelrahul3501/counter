import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [expression, setExpression] = useState('');
  const [result, setResult] = useState('');

  const handleNumberClick = (number) => {
    setExpression(expression + number);
  };

  const handleOperatorClick = (operator) => {
    setExpression(expression + operator);
  };

  const handleClearClick = () => {
    setExpression('');
    setResult('');
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setResult(result.toString());
      setExpression('');
    } catch (error) {
      setResult('Error');
    }
  };

  return (
    <div className="calculator">
      <input
        type="text"
        value={expression}
        readOnly
        className="calculator-input"
      />
      <div className="calculator-keys">
        <button onClick={handleClearClick} className="calculator-button">C</button>
        <button onClick={() => handleOperatorClick('/')} className="calculator-button">/</button>
        <button onClick={() => handleNumberClick(7)} className="calculator-button">7</button>
        <button onClick={() => handleNumberClick(8)} className="calculator-button">8</button>
        <button onClick={() => handleNumberClick(9)} className="calculator-button">9</button>
        <button onClick={() => handleOperatorClick('*')} className="calculator-button">*</button>
        <button onClick={() => handleNumberClick(4)} className="calculator-button">4</button>
        <button onClick={() => handleNumberClick(5)} className="calculator-button">5</button>
        <button onClick={() => handleNumberClick(6)} className="calculator-button">6</button>
        <button onClick={() => handleOperatorClick('-')} className="calculator-button">-</button>
        <button onClick={() => handleNumberClick(1)} className="calculator-button">1</button>
        <button onClick={() => handleNumberClick(2)} className="calculator-button">2</button>
        <button onClick={() => handleNumberClick(3)} className="calculator-button">3</button>
        <button onClick={() => handleOperatorClick('+')} className="calculator-button">+</button>
        <button onClick={() => handleNumberClick(0)} className="calculator-button">0</button>
        <button onClick={handleCalculate} className="calculator-button">=</button>
      </div>
      <p className="calculator-result">Result: {result}</p>
    </div>
  );
};

export default App;