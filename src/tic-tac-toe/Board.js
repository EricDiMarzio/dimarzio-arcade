import { useEffect, useState } from "react"
import Box from "./Box"
import Overlay from "./Overlay"

// Notice the destructured props!!
// Always check for the {}!

export function Board({user, setUser}){

    // pieces of state that we will pass down to each individual <Box />
    const [box1, setBox1] = useState('1')
    const [box2, setBox2] = useState('2')
    const [box3, setBox3] = useState('3')
    const [box4, setBox4] = useState('4')
    const [box5, setBox5] = useState('5')
    const [box6, setBox6] = useState('6')
    const [box7, setBox7] = useState('7')
    const [box8, setBox8] = useState('8')
    const [box9, setBox9] = useState('9')
    const [gameOver, setGameOver] = useState(false)

    // I've created an array of all the setters since we'll need to intentionally pass them down to each corresponding Box Component
    const setters = [setBox1, setBox2, setBox3, setBox4, setBox5, setBox6, setBox7, setBox8, setBox9]

    function checkForWin(){
        // Checks for XXX or OOO across relevant combinations
        //1 = 2 = 3, 1 = 4 = 7, etc...
        if (box1 === box2 && box1 === box3) setGameOver(true);
        if (box1 === box4 && box1 === box7) setGameOver(true);
        if (box1 === box5 && box1 === box9) setGameOver(true);
        if (box2 === box5 && box2 === box8) setGameOver(true);
        if (box3 === box6 && box3 === box9) setGameOver(true);
        if (box3 === box5 && box3 === box7) setGameOver(true);
        if (box4 === box5 && box4 === box6) setGameOver(true);
        if (box7 === box8 && box7 === box9) setGameOver(true);
            
        console.log([box1, box2, box3, box4, box5, box6, box7, box8, box9].join(''))

    };
    //checks for a winner every time the user updates (dependency array)
    // useEffect has two parts: a callback function and a dependency array - defaults to onMount
    useEffect(() => {
        checkForWin();
    }, [user]);

    // has nothing to do with the game - this is just the flashlight overlay
    const [style, setStyle] = useState({})
    function handleMovement(e) {
        const {currentTarget: target} = e;
        const rect = target.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        setStyle({
            '--mouse-x': `${x}px`,
           '--mouse-y': `${y}px`,
        })

    }
    function handleLeave(e){
        console.log(e)
        setTimeout(e => {setStyle({
            "--mouse-x": "50%",
            "--mouse-y": "50%"
        })}, 200)
        
    }
    // concludes flashlight stuff

    //Here we use a map method to create an array of React Components. You can also do this with a for loop.
    // You must always add a unique 'key' when creating an array of the same component. Here I use the index from our setters array (modified to match our Box naming convention)
    const boxes = setters.map((el, index) => <Box key={index+1} user={user} setUser={setUser} setBox={el} />)

    return (
        <div className="board" style={style} onMouseMove={handleMovement} onMouseLeave={handleLeave}>
            {boxes}
      
            <Overlay gameOver={gameOver} user={user}/>
        </div>
    )
}


// export default Board
