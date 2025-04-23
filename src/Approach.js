import { useState } from "react"

function Approach(){

const [counter, setCounter] = useState(0);

const [boxState, setBoxState] = useState([0, 1, 2, 3, 4, 5])


function increaseCounter () {
    const newArray = [...boxState]
    newArray[4] = 'x'
    setBoxState(newArray)
    setBoxState([...boxState, 'x'])
    // counter = counter +1;
    // counter++;
    // setCounter(counter++);
    setCounter(counter+1);
    setCounter(counter+1);
    setCounter(counter+1);

}

    return (
        <div>
            <button onClick={increaseCounter}><h1>{counter}</h1></button>
        </div>
    )
}

export default Approach