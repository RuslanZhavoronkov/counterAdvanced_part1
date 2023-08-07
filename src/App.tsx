import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from './components/Button/Button';
import { Counter } from './components/Couter/Couter';
import s from './App.module.css'



function App() {
  let [counter, setCounter] = useState<number>(0)

  const increaseCounter = () => {
    if (counter < 5) {
      setCounter(counter + 1);
    }

  }


  const resetCounter = () => {
    setCounter(0)
  }


  return (
    <div className={s.app}>
      
      <Counter counter={counter} color={counter < 5 ? 'black' : 'red'} />
      <div className={s.buttonArea}>
        <Button name={'INC'} callBack={increaseCounter} color={counter < 5 ? 'aquamarine' : 'grey'} />
        <Button name={'RESET'} callBack={resetCounter} color={counter > 0 ? 'aquamarine' : 'grey'} />
      </div>
      
     
    </div>
  );
}

export default App;
