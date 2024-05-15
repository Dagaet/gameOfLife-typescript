export class GameOfLifeBoard {
  private rows: number
  private columns: number
  private board: boolean[][]

  constructor(rows: number, columns: number) {
    this.rows = rows
    this.columns = columns
    this.board = this.createEmptyBoard()
  }

  private createEmptyBoard(): boolean[][] {
    return Array.from({ length: this.rows }, () => Array(this.columns).fill(false))
  }

  createCell(xValue: number, yValue: number, state: boolean): void {
    if (xValue >= 0 && xValue < this.rows && yValue >= 0 && yValue < this.columns) {
      this.board[xValue][yValue] = state
    }
  }
  getBoard() {
    return this.board
  }
}
