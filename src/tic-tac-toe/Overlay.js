function Overlay({gameOver, user}){
    return (
        <div className={gameOver ? 'overlay visible' : 'overlay invisible'}>
            <h2>{user==='X'? 'O': 'X'} WINS!</h2>
        </div>
    )
}

export default Overlay