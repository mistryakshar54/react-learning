export const geenrateGridData = (rows, cols, side) => {
  const gridMap = Array(rows * cols).fill(0);
  let x = 0;
  let y = 0;
  let numRows = rows;
  let colRows = 0;
  let indexNum = 99;
  while (numRows > 0) {
    while (colRows < cols) {
      gridMap[indexNum] = {
        x,
        y,
        cellNo: indexNum + 1,
        type: "",
      };
      x += side;
      colRows++;
      indexNum--;
    }
    y += side;
    while (colRows > 0) {
      x -= side;
      gridMap[indexNum] = {
        x,
        y,
        cellNo: indexNum + 1,
        type: "",
      };
      colRows--;
      indexNum--;
    }
    y += side;
    numRows -= 2;
  }
  return gridMap;
};
export const snakes = [
  {
    startCell: 23,
    endCell: 5,
  },
  {
    startCell: 54,
    endCell: 36,
  },
  {
    startCell: 64,
    endCell: 31,
  },
  {
    startCell: 97,
    endCell: 61,
  },
];

export const ladders = [
  {
    startCell: 6,
    endCell: 38,
  },
  {
    startCell: 42,
    endCell: 58,
  },
  {
    startCell: 80,
    endCell: 98,
  }
];
