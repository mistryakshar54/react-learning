import React, { useRef, useState, useEffect } from "react";
import "./App.css";
import { geenrateGridData, snakes, ladders } from "./utils";
// import "bootstrap/dist/css/bootstrap.min.css";

export default function App() {
  const noOfPlayers = 1;
  const [gridMap, setGridMap] = useState([]);
  const [players, setPlayers] = useState([]);
  const [currentPlayer, setCurrentPlayer] = useState({});
  const [gameStarted, setGameStarted] = useState(false);
  const [diceValue, setDiceValue] = useState(0);
  const [gameMsg, setGameMsg] = useState('Click on Roll Dice to start playing');
  const canvasRef = useRef(null);

  const drawRect = (x, y, h, w, color, textValue) => {
    const canvasLayout = canvasRef.current;
    var context = canvasLayout.getContext("2d");
    context.beginPath();
    context.rect(x, y, w, h);
    context.fillStyle = color;
    context.fill();
    context.lineWidth = 1;
    context.strokeStyle = "#003300";
    context.stroke();
    context.beginPath();
    context.font = "15pt Calibri";
    context.fillStyle = "white";
    context.fillText(textValue, x + w / 3, y + h / 3);
  };

  const drawSnakeOrLadder = (startPos, endPos, color, isSnake = false) => {
    const canvasLayout = canvasRef.current;
    var context = canvasLayout.getContext("2d");
    context.beginPath();
    context.moveTo(startPos.x + 10, startPos.y + 20);
    context.lineTo(endPos.x + 40, endPos.y + 40);
    if (!isSnake) {
      context.moveTo(startPos.x + 15, startPos.y + 25);
      context.lineTo(endPos.x + 45, endPos.y + 45);
    }
    context.lineWidth = isSnake ? 5 : 3;
    context.strokeStyle = color;
    context.lineCap = isSnake ? "round" : "square";
    context.stroke();
  };

  const drawPlayer = () => {
    const canvasLayout = canvasRef.current;
    var context = canvasLayout.getContext("2d");
    players.forEach((currPlayer) => {
      const { x, y } = currPlayer;
      context.beginPath();
      context.arc(x + 20, y + 20, 10, 0, 2 * Math.PI, false);
      context.fillStyle = "yellow";
      context.fill();
      context.lineWidth = 2;
      context.strokeStyle = "black";
      context.stroke();
    });
  };

  const clearCanvas = () => {
    const canvasLayout = canvasRef.current;
    var context = canvasLayout.getContext("2d");
    context.clearRect(0 ,0 , 800, 600);
  };

  const resetGame = () => {
    clearCanvas();
    movePlayer(gridMap[0]);
    loadGameData();
    setGameMsg("Click on Roll Dice to start playing");
  }
  useEffect( () => {
    let side = 50;
    const grid = geenrateGridData(10, 10, side);
    let { x, y, cellNo } = grid[0];
    let playerCount = noOfPlayers;
    const playersArr = [];
    while(playerCount > 0){
      playersArr.push({
        id: playerCount,
        x: x + playerCount * 10,
        y: y + playerCount * 10,
        cellNo,
      });
      playerCount--;
    }
    setPlayers([...playersArr]);
    setGridMap([...grid]);
    setCurrentPlayer({ id: 1, x: x + 20, y: y + 20, cellNo });
  },[]);

  const loadGameData = () => {
    setGameStarted(true);
    const grid = gridMap;
    for (let gridItem of gridMap) {
      const { x, y, cellNo } = gridItem;
      drawRect(x, y, 50, 50, "red", cellNo);
    }
    createSnakeAndLadder(grid, "snake", snakes);
    createSnakeAndLadder(grid, "ladder", ladders);
    drawPlayer();
  };

  
  const createSnakeAndLadder = (grid, type, arr) => {
    for (let item of arr) {
      const { startCell, endCell } = item;
      const startPos = grid[startCell - 1];
      const endPos = grid[endCell - 1];
      drawSnakeOrLadder(
        { x: startPos.x, y: startPos.y },
        { x: endPos.x, y: endPos.y },
        type === "snake" ? "blue" : "green",
        type === "snake" ? true : false
      );
      grid[startCell - 1] = {
        ...startPos,
        type: type,
        goTo: { ...endPos },
      };
    }
  };

  const rollDice = () => {
    const stepsToMove =  Math.floor(Math.random() * (6)) + 1;
    setDiceValue(stepsToMove);
    const jumpToCell = stepsToMove + currentPlayer.cellNo - 1;
    if (jumpToCell >= 100) {
      movePlayer({ ...gridMap[gridMap.length - 1] });
      console.log(`🥳Congratulations!! Player ${currentPlayer.id} won the game🥳`);
      setGameMsg(`🥳Congratulations!! Player ${currentPlayer.id} won the game🥳`);
    } else {
      const newCellData = {...gridMap[jumpToCell]};
      if( newCellData.type === 'snake' || newCellData.type === 'ladder' ){
        console.log(
          `Encountered a ${newCellData.type} 
          ${newCellData.type === "snake" ? "🐍" : "📶"} going to ${
            newCellData.goTo.cellNo
          } !!`
        );
        setGameMsg(
          `Encountered a ${newCellData.type} 
          ${newCellData.type === "snake" ? "🐍" : "📶"} going to ${
            newCellData.goTo.cellNo
          } !!`
        );
        movePlayer( newCellData.goTo );
      }
      else{
        console.log( `Nothing new just a step jump` );
        setGameMsg(`Moving ${stepsToMove} step(s)`);
        movePlayer( newCellData);

      }
    }
    clearCanvas();
    loadGameData();
  };

  const movePlayer = (newCellData) => {
    const playerData = {
      id : currentPlayer.id,
      x : newCellData.x,
      y : newCellData.y,
      cellNo : newCellData.cellNo
    };
    
    const playerArr = players.map( item => 
    {
      if(item.id === currentPlayer.id){
        item.x = playerData.x;
        item.y = playerData.y;
        item.cellNo = playerData.cellNo;
      }
      return item;
    });
    setCurrentPlayer({ ...playerData });
    setPlayers([...playerArr]);
  };
  
  return (
    <div className="App">
      <h1>Snakes And Ladders</h1>
      <div className="col-6 control-buttons">
        <button
          className="btn btn-danger"
          disabled={gameStarted === true}
          onClick={loadGameData}
        >
          Play Game
        </button>
        <button className="btn btn-primary" onClick={rollDice}>
          Roll Dice
        </button>
        <button className="btn btn-primary" onClick={resetGame}>
          Reset Game
        </button>
      </div>
      <div className="col-12">
        <div className="col-12">
          <canvas ref={canvasRef} id="myCanvas" width="550" height="500" />
        </div>
      </div>
      {gameStarted && 
      <div className="col-12">
      <h2>Currently Playing : {currentPlayer?.id}</h2> 
      <h3>Got a {diceValue}</h3> 
      <h3>{gameMsg}</h3> 
      </div>}
    </div>
  );
}
