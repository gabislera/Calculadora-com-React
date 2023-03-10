import React from 'react'
import './Calculator.css'

const Calculator = () => {
  const [num, setNum] = React.useState(0)
  const [num2, setNum2] = React.useState(0)
  const [operacao, setOperacao] = React.useState()

  function inputNum(e) {
    let input = e.target.value
    if(num === 0) {
      setNum(input)
    } else {
      setNum(num + input)
    }
  }

  function clear() {
    setNum(0)
  }

  function percent() {
    setNum(num / 100)
  }

  function changeSign() {
    setNum(-num)
  }

  function handleOperation(e)
  let operator = e.target.value

  return (
    <div className='wrapper'>
      <div>
        <h1 className='result'>{num}</h1>
      </div>
      <div>
        <button onClick={clear}>AC</button>
        <button onClick={changeSign}>+/-</button>
        <button onClick={percent}>%</button>
        <button className='orange'>/</button>
        <button className='grey' onClick={inputNum} value={7}>7</button>
        <button className='grey' onClick={inputNum} value={8}>8</button>
        <button className='grey 'onClick={inputNum} value={9}>9</button>
        <button className='orange'>X</button>
        <button className='grey' onClick={inputNum} value={4}>4</button>
        <button className='grey' onClick={inputNum} value={5}>5</button>
        <button className='grey' onClick={inputNum} value={6}>6</button>
        <button className='orange'>-</button>
        <button className='grey' onClick={inputNum} value={1}>1</button>
        <button className='grey' onClick={inputNum} value={2}>2</button>
        <button className='grey' onClick={inputNum} value={3}>3</button>
        <button className='orange' onClick={handleOperation} value={'+'}>+</button>
        <button className='grey' onClick={inputNum} value={0}>0</button>
        <button className='grey' onClick={inputNum} value={','}>,</button>
        <button className='orange'>=</button>
      </div>
    </div>
  )
}

export default Calculator