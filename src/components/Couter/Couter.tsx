import React from "react";
import s from './Counter.module.css'

type PropsCounterType = {
    counter: number
    color: string
}


export const Counter: React.FC<PropsCounterType> = (props) => {
    return (
        <div className={s.counter}>
            <div className={props.color === 'black' ? s.active : s.limit}>{props.counter}</div>
        </div>
    )
} 