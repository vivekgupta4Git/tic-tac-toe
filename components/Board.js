import { View ,StyleSheet,Text} from "react-native"
import { useState } from "react"
import Square from './square'
import { Button } from "react-native-paper";
export default function Board() {

  const [squares,setSquares] = useState(Array(9).fill(null))
  const [xIsNext,setIsXNext] = useState(true);

  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }


  const handleClick = (i) =>{
    if(squares[i] || calculateWinner(squares)){
      return;    
    }
  
    const nextSquares = squares.slice();
    if(xIsNext){
      nextSquares[i] = "X";
    }else
    {
      nextSquares[i] = "O";
    }
    setSquares(nextSquares)
    setIsXNext(!xIsNext);
  }

    return <>
    <Text style={styles.status}>{status}</Text>
     <View style={styles.boardRow}>
    <Square value={squares[0]} onSquareClick={()=>{handleClick(0)}}></Square>
    <Square value={squares[1]} onSquareClick={()=>{handleClick(1)}}></Square>
    <Square value={squares[2]} onSquareClick={()=>{handleClick(2)}}></Square>
    </View>
    <View style={styles.boardRow}>
    <Square value={squares[3]} onSquareClick={()=>{handleClick(3)}}></Square>
    <Square value={squares[4]} onSquareClick={()=>{handleClick(4)}}></Square>
    <Square value={squares[5]} onSquareClick={()=>{handleClick(5)}}></Square>
    </View>
    <View style={styles.boardRow}>
    <Square value={squares[6]} onSquareClick={()=>{handleClick(6)}}></Square>
    <Square value={squares[7]} onSquareClick={()=>{handleClick(7)}}></Square>
    <Square value={squares[8]} onSquareClick={()=>{handleClick(8)}}></Square>
    </View>
    <View style={{padding: 20}}>
          <Button mode="contained" onPress={()=>{setSquares(Array(9).fill(null))}}>Restart</Button>
    </View>
   </>
}
    

const styles = StyleSheet.create({

    boardRow:{
      flexDirection: 'row',
      backgroundColor: '#fff',
      alignItems: 'start',
      justifyContent: 'center',
    }
  });

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }