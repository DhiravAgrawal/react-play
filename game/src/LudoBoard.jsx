import { useState } from "react";

export default function LudoBoard() {
  const [moves, setMoves] = useState({ blue: 0, yellow: 0, green: 0, red: 0 });

  return (
    <div>
      <p>Game begins</p>
      <div className="board">
        <p>Blue Moves {moves.blue}</p>
        <button style={{ backgroundColor: "blue" }} onClick={() => setMoves({ ...moves, blue: moves.blue + 1 })}>+1</button>
        <p>Yellow Moves {moves.yellow}</p>
        <button style={{ backgroundColor: "yellow" }} onClick={() => setMoves({ ...moves, yellow: moves.yellow + 1 })}>+1</button>
        <p>Green Moves {moves.green}</p>
        <button style={{ backgroundColor: "green" }} onClick={() => setMoves({ ...moves, green: moves.green + 1 })}>+1</button>
        <p>Red Moves {moves.red}</p>
        <button style={{ backgroundColor: "red" }} onClick={() => setMoves({ ...moves, red: moves.red + 1 })}>+1</button>
      </div>
    </div>
  );
}
