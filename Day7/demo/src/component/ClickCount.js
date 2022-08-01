import { useState } from 'react';

export default function ClickCount() {
    const [count, setCount] = useState(0);

    let increaseByOne = () => {

        setCount(count + 1);

    }

    return (
        <div className="container">
            <span>{count}</span>
            <button onClick={increaseByOne}>Increase by one</button>
        </div>
    )
}