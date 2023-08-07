import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { Counter } from './components/Couter/Couter';
import s from './App.module.css'
import { Input } from './components/Input/Input';


export const firstMessage = "Enter values and press 'set'"
export const warningMessage = 'Incorrect value!'

  function App() {


  let [counter, setCounter] = useState<number>(0)
  let [maxValue, setMaxValue] = useState<number>(0)
  let [startValue, setStartValue] = useState<number>(0)
  let [message, setMessage] = useState<string>('')



  const increaseCounter = () => {
    if (counter < maxValue) {
      setCounter(counter + 1);
    }

  }

  const resetCounter = () => {
    setCounter(startValue)
  }

  // write in state max value 
  const changeMaxValue = (value: number) => {
    
    setMaxValue(value);
    value > startValue && value >=0  ? setMessage(firstMessage) : setMessage(warningMessage)
  }


  // write in state start value 
  const changeStartValue = (value: number) => {
    setStartValue(value);
    value < maxValue && value >= 0 ? setMessage(firstMessage) : setMessage(warningMessage)
  }




  // setting the minimum value

  const settingMinimumValue = () => {
    setMessage('')
    setCounter(startValue)

  }


  return (
    <div>

      <div className={s.app}>
        <Counter counter={message? message: counter} color={counter < maxValue ? 'black' : 'red'} />
        <div className={s.buttonArea}>
          <Button name={'INC'} callBack={increaseCounter} color={counter < maxValue ? 'aquamarine' : 'grey'} />
          <Button name={'RESET'} callBack={resetCounter} color={counter > 0 ? 'aquamarine' : 'grey'} />
        </div>
      </div>

      <div className={s.app}>
        <Input name={'max value'} callBack={changeMaxValue} color={startValue === maxValue || maxValue < 0 ? 'red' : 'black'} />
        <Input name={'min value'} callBack={changeStartValue} color={startValue === maxValue || startValue < 0 ? 'red' : 'black'} />
        <div className={s.buttonArea}>
          <Button name={'SET'} callBack={settingMinimumValue} color={counter === startValue ? 'grey' : 'aquamarine'} />
        </div>
      </div>

    </div>
  );
}

export default App;

