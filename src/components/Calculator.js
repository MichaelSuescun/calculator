import { useState } from 'react'
import './calculator.scss'

const operations = {
  '+': (a, b) => { return a + b },
  '-': (a, b) => { return a - b },
  'X': (a, b) => { return a * b },
  '/': (a, b) => { return a / b }
}

const Calculator = () => {
  const [valueInput, setValueInput] = useState('')
  const [valueResult, setValueResult] = useState(0)

  const handleChange = (e) => {
    const value = e.target.innerText
    setValueInput(valueInput + value)
  }

  const operation = () => {
    // const contentInput = valueInput.split(/([+-/X])/)

    // const num1 = parseInt(contentInput[0])
    // const operationSig = contentInput[1]
    // const num2 = parseInt(contentInput[2])

    // let result = operations[operationSig](num1, num2)

    // setValueResult(result)

    const result = eval(valueInput)

    setValueResult(result)
  }

  const clearInput = () => {
    setValueInput('')
    setValueResult(0)
  }

  return (
    <div className="calculator-container">
      <div className="screen">
        <div className="input">{valueInput}<div className="type">0</div></div>
        <div className="output">{valueResult}</div>
      </div>
      <div className="buttons">
        <div className="buttons-numbers">
          <button onClick={handleChange}>7</button>
          <button onClick={handleChange}>8</button>
          <button onClick={handleChange}>9</button>
          <button onClick={handleChange}>4</button>
          <button onClick={handleChange}>5</button>
          <button onClick={handleChange}>6</button>
          <button onClick={handleChange}>1</button>
          <button onClick={handleChange}>2</button>
          <button onClick={handleChange}>3</button>
          <button onClick={handleChange}>0</button> 
          <button onClick={clearInput}>AC</button>
          <button onClick={operation}>=</button>
        </div>
        <div className="buttons-operations">
          <button onClick={handleChange}>/</button>
          <button onClick={handleChange}>*</button>
          <button onClick={handleChange}>-</button>
          <button onClick={handleChange}>+</button>
        </div>
      </div>
    </div>
  )
};

export default Calculator
