import React, { useState } from 'react'
import { singletonCounter,count } from './singletons'


const Singleton = () => {
    const [counter,setCounter] = useState(count) ;
    const onIncreament = () => {
        singletonCounter.increament()
        setCounter(count)
    }
    return (
        <div>
            <p>Singleton</p>
            <button onClick={onIncreament}>increament</button>
            <button onClick={onIncreament}>increament</button>
            <p>count is:{counter}</p>

        </div>
    )
}


export default Singleton