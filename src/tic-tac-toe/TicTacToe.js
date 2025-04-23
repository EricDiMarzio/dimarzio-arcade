import './TicTacToe.css';
import { useState } from 'react';
import {Board} from './Board';
import Header from './Header';
import Approach from '../Approach';

// Let's take note of the import statements ^
// Then let's take note of the anatomy of a React component
// functionality, return (one element!), props

function TicTacToe() {
  const [user, setUser] = useState('O');


  return (
    <div className="tictactoe">
      <Header />
      <Board user={user} setUser={setUser} />
      <Approach />
    </div>
  );
}

export default TicTacToe;
