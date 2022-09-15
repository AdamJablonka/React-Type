import React from 'react'
import useTimer from './hooks/useTimer'

const Timer = () => {
    const { time, startTimer, stopTimer } = useTimer(15)
    return <>
        <div>{time}</div>
        <button onClick={startTimer}>start</button>
        <button onClick={stopTimer}>stop</button>
    </>
}

export default Timer