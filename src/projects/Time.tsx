import { useState } from "react";

function addMinutes(date: Date, minutes: number) {
    return new Date(date.getTime() + minutes * 60000);
}

function Clock() {
    const [time, setTime] = useState(new Date());
    const [apples, setApples] = useState(10)

    const handleClick1 = () => {
        setTime(addMinutes(time, 20));
    };

    const addApples = () => {
        setApples(apples + 1)
    }

    // const handleClick2 = () => {
    //     setTime((previousTime) => addMinutes(previousTime, 10));
    // };

    return (
        <div>
            <p>{time.toLocaleTimeString()}</p>
            <button onClick={handleClick1}>+ 10 Minutes</button>

            <p>{apples}</p>
            <button onClick={addApples}>+1 apple</button>
            {/* <button onClick={handleClick2}>+ 10 Minutes</button> */}
        </div>
    );
}

export default Clock