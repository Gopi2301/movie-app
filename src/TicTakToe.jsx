import { useState } from "react";
export function TicTakToe() {
  const board = [null,null,null,null,null,null,null,null,null]
  return (
    <div>
      <h1>TicTakToe Game</h1>
      <div className="board">
        {board.map((ele, index)=>(
     <GameBox key={index}/>
      ))}
      </div>
    </div>
  );
}
function GameBox(){
  const  [val, setval] = useState("")
  // const value = {val ? "X" : "O",}
  const styles = {
    color: val == "X" ? "green" : "red",
  }
  return (
    <div style= {styles} onClick={()=>setval("X")} className="game-box">{val}</div>
    
    ) 
}
