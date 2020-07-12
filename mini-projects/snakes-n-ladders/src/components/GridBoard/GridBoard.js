import React, { useState, useEffect } from "react";
import './Grid.css'
import { generateGridData, snakes, ladders } from "../../utils";
import  GridComponent from "./Grid/Grid";
import PlayerComponent from "./Player/Player";
import SnakesAndLadderComponent from './SnakesAndLadders/SnakesAndLadders';
const canvasRef = React.createRef();

const GridBoard = () => {
    const noOfPlayers = 2; //Only 2 players for now can be 4 max 
    const colors = ['yellow', 'blue', 'orange', 'purple'];
    const [canvasLoaded, setCanvasLoaded] = useState(false);
    const [gridMap, setGridMap] = useState([]);
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState(1);
    const [diceValue, setDiceValue] = useState(0);
    const [gameMsg, setGameMsg] = useState('Click on Roll Dice to start playing');
    const [gamestarted , setGameStarted] = useState(false);
     useEffect(() => { //Initialize all data
       let side = 50;
       const grid = generateGridData(10, 10, side); //get the grid
       let { x, y, cellNo } = grid[0];
       let playerCount = noOfPlayers;
       const playersArr = [];
       while (playerCount > 0) {
         playersArr.push({
           id: playerCount,
           x: x + playerCount * 10,
           y: y + playerCount * 10,
           cellNo,
           color: colors[playerCount - 1],
         });
         playerCount--;
       }
       setPlayers([...playersArr]); //set initial players
       setGridMap([...grid]); //set grid into state
     }, []);
    
    const clearCanvas = () => { //clear game canvas
        setCanvasLoaded(false);
        const canvasLayout = canvasRef.current;
        var context = canvasLayout.getContext("2d");
        context.clearRect(0, 0, 800, 600);
    };
    const loadCanvas = () => {
      setCanvasLoaded(true);
      setGameStarted(true);
    };
    
    const rollDice = () => {
      setDiceValue(0);
      setGameMsg("");
      const stepsToMove = Math.floor(Math.random() * 6) + 1;
      setDiceValue(stepsToMove);
      const jumpToCell = stepsToMove + players[currentPlayer - 1].cellNo - 1;
      if (jumpToCell >= 100) {
        movePlayer({ ...gridMap[gridMap.length - 1] });
        console.log(
          `🥳Congratulations!! Player ${currentPlayer} won the game🥳`
        );
        setGameMsg(
          `🥳Congratulations!! Player ${currentPlayer} won the game🥳`
        );
      } else {
        const newCellData = { ...gridMap[jumpToCell] };
        if (newCellData.type === "snake" || newCellData.type === "ladder") {
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
          movePlayer(newCellData.goTo);
        } else {
          console.log(`Nothing new just a step jump`);
          setGameMsg(`Moved ${stepsToMove} step(s)`);
          movePlayer(newCellData);
        }
      }
      clearCanvas();
      loadCanvas();
    };

    const movePlayer = (newCellData) => {
      const playerArr = players.map((item) => {
        if (item.id === currentPlayer) {
          item.x = newCellData.x;
          item.y = newCellData.y;
          item.cellNo = newCellData.cellNo;
          item.color = colors[item.id - 1];
        }
        return item;
      });
      setCurrentPlayer(currentPlayer === noOfPlayers ? 1 : currentPlayer + 1);
      setPlayers([...playerArr]);
      
    };

    const resetGame = () => {
        clearCanvas();
        movePlayer(gridMap[0]);
        loadCanvas();
        setDiceValue(0);
        setCurrentPlayer(1);
        setGameMsg("Click on Roll Dice to start playing");
    };
    return (
      <>
        <h1>Welcome to Snakes And Ladders</h1>
        <div className="col-lg-6 col-xs-12 control-buttons">
          <button disabled={gamestarted === true} className="btn btn-success" onClick={loadCanvas}>Start Game</button>
          <button className="btn btn-success"onClick={rollDice}>Roll Dice</button>
          <button className="btn btn-danger"onClick={resetGame}>Reset Game</button>
        </div>
        <div className="col-12">
          <canvas ref={canvasRef} width="578" height="500" />
          <GridComponent
          renderCanvas={canvasLoaded}
          canvasRef={canvasRef}
          gridMap={gridMap}
          />
          <SnakesAndLadderComponent
              canvasRef={canvasRef}
              renderCanvas={canvasLoaded}
              gridMap={gridMap}
              type="snake"
              arr={snakes}
          />
          <SnakesAndLadderComponent
              canvasRef={canvasRef}
              renderCanvas={canvasLoaded}
              gridMap={gridMap}
              type="ladder"
              arr={ladders}
          />
          <PlayerComponent
          canvasRef={canvasRef}
          renderCanvas={canvasLoaded}
          players={players}
          />
        </div>
        {gamestarted && <div className="col-12">
        { players.map( player => <div key={`player-${player.id}`}><span className={`badge ${colors[player.id-1]}`}>Player - {player.id}</span></div> ) }
        {diceValue > 0 && <h3>Got a {diceValue}</h3>}
        <h3>{gameMsg}</h3>
        <h2>It's Player {currentPlayer} 's turn! Roll the Dice!!</h2>
        <h5 className="muted">Max players are 4</h5>
        </div>}
      </>
    );
}

export default GridBoard;