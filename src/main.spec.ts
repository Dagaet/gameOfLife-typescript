import { describe, it, expect } from "vitest"
import { gameOfLife } from "./main.js"

describe("Game of life should", () => {
  it("Create cells in given positions", () => {
    const board = gameOfLife()
    board.createCell(1, 1, true)
    const changedBoard = board.getBoard()
    expect(changedBoard[1][1]).toBe(true)
  })
})
