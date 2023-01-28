import { useState } from "react";


export function TicTakToe() {
  const [board,setBoard] = useState([null,null,null,null,null,null,null,null,null]) 
  const [isXturn, setXturn]=useState(true)
  const HandleClick =(index)=>{
console.log(index)
const boardCopy = [...board]
boardCopy[index]=  isXturn ? "X" : "O"
setBoard(boardCopy)
setXturn(!isXturn)
  }
  const decideWinner=(board)=>{
    const lines =[
      [0,1,2],
      [3.4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a,b,c] = lines[i];
    if (board[a]!== null && board[a]=== board[b] && board[b]===board[c]){
      console.log("Winner", board[a]);
      return board[a]
    }
  }
  return null; 

  }
  const winner = decideWinner(board)
  return (
    <div>
      <h1>TicTakToe Game</h1>
      <div className="board">
        {board.map((ele, index)=>(
     <GameBox key={index} val={ele} onPlayerClick={()=>HandleClick(index)} />
      ))}
      </div>
      <h1>The winner is : {winner}</h1>
    </div>
  );
}
function GameBox({val, onPlayerClick}){
  // const  [val, setval] = useState("")

  const styles = {
    color: val == "X" ? "green" : "red",
  }
  return (
    <div style= {styles} onClick={onPlayerClick} className="game-box">{val}</div>
    
    ) 
}

// decideWinner(board);