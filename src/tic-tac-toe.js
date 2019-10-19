class TicTacToe {
  constructor() {
    this.stepNumber = 0;
    this.xIsNext = true;
    this.squares = Array(9).fill(null);
  }

  getCurrentPlayerSymbol() {
    return this.xIsNext ? 'x' : 'o';
  }

  nextTurn(rowIndex, colIndex) {
    if (this.getFieldValue(rowIndex, colIndex) || this.getWinner()) {
      return;
    }

    this.squares[rowIndex * 3 + colIndex] = this.xIsNext ? 'x' : 'o';
    this.xIsNext = !this.xIsNext;
    this.stepNumber++;
  }

  isFinished() {
    return Boolean(this.getWinner()) || this.noMoreTurns();
  }

  noMoreTurns() {
    return this.stepNumber > 8;
  }

  isDraw() {
      return this.noMoreTurns() && !this.getWinner();
  }

  getWinner() {
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

    for (let i = 0, len = lines.length; i < len; i++) {
      const [a, b, c] = lines[i];

      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        return this.squares[a];
      }
    }

    return null;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.squares[rowIndex * 3 + colIndex];
  }
}

module.exports = TicTacToe;
