import React from "react";
import s from './Counter.module.css'
import { firstMessage, warningMessage } from "../../App";

type PropsCounterType = {
    counter: number | string
    color: string
}



export const Counter: React.FC<PropsCounterType> = (props) => {

    const styleCounter = `
    ${props.color === 'black' ? s.active : s.limit}
    ${props.counter === firstMessage ? s.active : s.limit}
    ${props.counter === warningMessage ? s.limit : s.active}
    `

    return (
        <div className={s.counter}>
            <div className={styleCounter}>{props.counter}</div>
        </div>
    )
} 


//props.color === 'black' ? s.active : s.limit