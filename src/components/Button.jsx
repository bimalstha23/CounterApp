import React from 'react'

export const Button = ({ counter, count, setCount }) => {
    const clickHandler = () => {
        setCount(count + counter);
    }
    return (
        <div >
            <button onClick={clickHandler} >count{counter}</button>
        </div>
    )
}
