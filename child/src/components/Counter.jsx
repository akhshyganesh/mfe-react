import React, {useState} from 'react'

const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <h4>Count Value: {count}</h4>
            <button onClick={() => setCount(prev => prev + 1)}> Increment </button>
            <button onClick={() => setCount(prev => prev - 1)}> Decrement </button>
        </div>
    )
}

export default Counter
