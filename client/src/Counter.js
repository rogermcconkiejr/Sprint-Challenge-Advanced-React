import React from 'react';
import useLocalStorage from './hooks/useLocalStorage'

const Counter = () => {
    const [count, setCount] = useLocalStorage(1);
    const count1 = () => {
        setCount(count + 1);
      }

return (
    <div>
        <div>Count: {count} </div>
        <button onClick={count1}>Click here!</button>
    </div>
)
}

export default Counter;