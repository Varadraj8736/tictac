import { useState } from "react";
import React from "react";

import Square from "./Square";

const Board = () =>{

    const [state,setState] = useState(Array(9).fill(null));
    const [isXturn,setXturn] = useState(true);
    const cheakWinner = () =>{

        const winner = [
            [0,1,2],
            [3,4,5],
            [6,7,8],
            [0,3,6],
            [1,4,7],
            [2,5,8],
            [0,4,8],
            [2,4,6]
        ];
        for(let logic of winner)
        {
            const[a,b,c] = logic;
            if(state[a] !== null && state[a] === state[b] && state[a] === state[c])
            {
                return state[a];
            }
        }
        const isBoardFull = Object.values(state).every((value) => value !== null);
        if (isBoardFull) {
          return "No result";
        }

        return false;
    }

    const isWinner = cheakWinner();
  

    const handleClick =(index)=>{

        if(state[index] === null)
        {
            const copystate = {...state};
            copystate[index] = isXturn ? "X" : 'O';
            setState(copystate);
            setXturn(!isXturn);
        }
        
    }

    const handleReset = () =>{
        setState(Array(9).fill(null));
    }


    return(

        <div className="board-container">
            {
                isWinner 
                ?(
                    <>
                      {isWinner === "No result" ? (
                        <h1>NO RESULT</h1>
                      ) : (
                        <h1 className="winner-message ">{isWinner} Won the game <button onClick={handleReset} className="reset-button">Play Again</button></h1>
                          
                        
                      )}
                    </>
                ) 
                : (
                    <>
                        <h4>Player {isXturn ? "X" : "O"} Please Move!!!</h4>
                        <div className="board-row">
                            <Square onClick = {()=> handleClick(0)} value = {state[0]}></Square>
                            <Square onClick = {()=> handleClick(1)} value = {state[1]}/>
                            <Square onClick = {()=> handleClick(2)} value = {state[2]}/>
                        </div>     
                        <div className="board-row">
                            <Square onClick = {()=> handleClick(3)} value = {state[3]}></Square>
                            <Square onClick = {()=> handleClick(4)} value = {state[4]}/>
                            <Square onClick = {()=> handleClick(5)} value = {state[5]}/></div>     
                        <div className="board-row">
                            <Square onClick = {()=> handleClick(6)} value = {state[6]}></Square>
                            <Square onClick = {()=> handleClick(7)} value = {state[7]}/>
                            <Square onClick = {()=> handleClick(8)} value = {state[8]}/>
                        </div>   
                    </>
                )
            }  
    
        </div>     
    )
}
export default Board;
