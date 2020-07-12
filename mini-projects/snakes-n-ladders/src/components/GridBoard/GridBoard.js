import React, { useState, useEffect } from "react";
import './Grid.css'
import { geenrateGridData, snakes, ladders } from "../../utils";
import  GridComponent from "./Grid/Grid";
import PlayerComponent from "./Player/Player";
import SnakesAndLadderComponent from './SnakesAndLadders/SnakesAndLadders';
const canvasRef = React.createRef();

const GridBoard = () => {
    const noOfPlayers = 1;
    const [canvasLoaded, setCanvasLoaded] = useState(false);
    const [gridMap, setGridMap] = useState([]);
    const [players, setPlayers] = useState([]);
    const [currentPlayer, setCurrentPlayer] = useState({});
    const [diceValue, setDiceValue] = useState(0);
    const [gameMsg, setGameMsg] = useState('Click on Roll Dice to start playing');

     useEffect(() => {
       let side = 50;
       const grid = geenrateGridData(10, 10, side);
       let { x, y, cellNo } = grid[0];
       let playerCount = noOfPlayers;
       const playersArr = [];
       while (playerCount > 0) {
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
     }, []);
    
    const clearCanvas = () => {
        setCanvasLoaded(false);
        const canvasLayout = canvasRef.current;
        var context = canvasLayout.getContext("2d");
        context.clearRect(0, 0, 800, 600);
    };
    const loadCanvas = () => {
      setCanvasLoaded(true);
    };
    
    const rollDice = () => {
      const stepsToMove = Math.floor(Math.random() * 6) + 1;
      setDiceValue(stepsToMove);
      const jumpToCell = stepsToMove + currentPlayer.cellNo - 1;
      if (jumpToCell >= 100) {
        movePlayer({ ...gridMap[gridMap.length - 1] });
        console.log(
          `🥳Congratulations!! Player ${currentPlayer.id} won the game🥳`
        );
        setGameMsg(
          `🥳Congratulations!! Player ${currentPlayer.id} won the game🥳`
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
          setGameMsg(`Moving ${stepsToMove} step(s)`);
          movePlayer(newCellData);
        }
      }
      clearCanvas();
      loadCanvas();
    };

    const movePlayer = (newCellData) => {
      const playerData = {
        id: currentPlayer.id,
        x: newCellData.x,
        y: newCellData.y,
        cellNo: newCellData.cellNo,
      };

      const playerArr = players.map((item) => {
        if (item.id === currentPlayer.id) {
          item.x = playerData.x;
          item.y = playerData.y;
          item.cellNo = playerData.cellNo;
        }
        return item;
      });
      setCurrentPlayer({ ...playerData });
      setPlayers([...playerArr]);
    };

    const resetGame = () => {
        clearCanvas();
        movePlayer(gridMap[0]);
        loadCanvas();
        setDiceValue(0);
        setGameMsg("Click on Roll Dice to start playing");
    };
    return (
      <>
        <h1>Welcome to Snakes And Ladders</h1>
        <div className="col-6 control-buttons">
          <button className="btn btn-success" onClick={loadCanvas}>Start Game</button>
          <button className="btn btn-success"onClick={rollDice}>Roll Dice</button>
          <button className="btn btn-danger"onClick={resetGame}>Reset Game</button>
        </div>
        <div className="col-12">
            <div className="col-lg-5 col-xs-12">
            <canvas ref={canvasRef} width="578" height="500" />
            <GridComponent
            renderCanvas={canvasLoaded}
            canvasRef={canvasRef}
            gridMap={gridMap}
            />
            {canvasLoaded && (
            <SnakesAndLadderComponent
                canvasRef={canvasRef}
                gridMap={gridMap}
                type="snake"
                arr={snakes}
            />
            )}
            {canvasLoaded && (
            <SnakesAndLadderComponent
                canvasRef={canvasRef}
                gridMap={gridMap}
                type="ladder"
                arr={ladders}
            />
            )}
            <PlayerComponent
            canvasRef={canvasRef}
            renderCanvas={canvasLoaded}
            players={players}
            />
            </div>
            <div className="col-lg-5 col-xs-12">
            <h2>Currently Playing : Player {currentPlayer?.id}</h2>
            {diceValue > 0 && <h3>Got a {diceValue}</h3>}
            <h3>{gameMsg}</h3>
            </div>
        </div>
      </>
    );
}

export default GridBoard;