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
    <>
      <h1>App</h1>
    </>
  )
}

export default App