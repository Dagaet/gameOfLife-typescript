// let board: boolean[][] = []

import { GameOfLifeBoard } from "./board.js"

// import { createCell, getBoard } from "./board.js"

// function ensureRowInitialized(row: number) {
//   if (!board[row]) {
//     board[row] = []
//   }
// }

// function createCell(xValue: number, yValue: number) {
//   ensureRowInitialized(xValue)
//   board[xValue][yValue] = true
// }
export function gameOfLife() {
  let gameOfLifeBoard = new GameOfLifeBoard(4, 4)
  return gameOfLifeBoard
}
