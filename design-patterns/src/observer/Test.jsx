import React from 'react'
import observable from './observable'

const Test = () => {

    const handleClick = () => {
        observable.notify('user clicked')
    }
    const logger = (data) => {
        console.log(Date.now(), data);
    }
    observable.subscribe(logger)
    return (
        <>
            <button onClick={handleClick}>click me</button>
        </>
    )
}

export default Test