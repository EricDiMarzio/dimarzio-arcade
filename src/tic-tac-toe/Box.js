import { useState } from "react"

function Box({user, setUser, setBox}){
    const [marker, setMarker] = useState('');
    


    function handleClick(){
        setMarker(user);
        setBox(user);
        user === 'X' ? setUser('O') : setUser('X');
        // ternary operator --   condition ? if-truthy : if-falsy
    }
    return (

        <div className={marker === '' ? 'box' : `box ${marker} no-click`} onClick={() => {handleClick()}}>
            <h2>{marker}</h2>
        </div>
    )
}

export default Box

        // visit TicTacToe.css to see what these classes are doing
        // Notice we can use JavaScript variables or State in our classList and our text content!
        // notice the onClick property
        // When does the handleClick function happen?
        // Does handleClick need to be in an anonymous callback function? (show without)