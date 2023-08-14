import { Button } from "../Button/Button"
import { Counter } from "../Couter/Couter"
import s from './MainNumberCounter.module.css'

type PropsMainNumberCounterType = {
    message: string
    counter: number
    maxValue: number
    increaseCounter: () => void
    resetCounter: () => void
}





export const MainNumberCounter: React.FC<PropsMainNumberCounterType> = (props) => {
    return (
        <div className={s.counterArea}>
        <Counter 
        counter={props.message? props.message: props.counter} 
        color={props.counter === 0 || props.counter < props.maxValue ? 'black' : 'red'}/> 
        <div className={s.buttonArea}>
          <Button name={'INC'} callBack={props.increaseCounter} color={props.counter < props.maxValue ? 'aquamarine' : 'grey'} />
          <Button name={'RESET'} callBack={props.resetCounter} color={props.counter > 0 ? 'aquamarine' : 'grey'} />
        </div>

      </div>
    )
}






