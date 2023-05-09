import React, { Component } from "react";
import Cell from "./Cell";
import "./Board.css";

class Board extends Component {
  static defaultProps = {
    nrows: 5,
    ncols: 5,
    chanceLightStartsOn: 0.25,
  };

  constructor(props) {
    super(props);
    this.state = {
      hasWon: false,
      board: this.createBoard(),
    };
    this.createBoard = this.createBoard.bind(this);
    this.flipCellsAround = this.flipCellsAround.bind(this);
  }

  createBoard() {
    let board = [];

    for (let row = 0; row < this.props.nrows; row++) {
      board.push([]);
      for (let col = 0; col < this.props.ncols; col++) {
        board[row].push(Math.random() < this.props.chanceLightStartsOn);
      }
    }
    return board;
  }

  /** handle changing a cell: update board & determine if winner */

  flipCellsAround(coord) {
    let { ncols, nrows } = this.props;
    let board = this.state.board;
    let [y, x] = coord.split("-").map(Number);

    function flipCell(y, x) {
      if (x >= 0 && x < ncols && y >= 0 && y < nrows) {
        board[y][x] = !board[y][x];
      }
    }

    flipCell(y, x);
    flipCell(y - 1, x);
    flipCell(y + 1, x);
    flipCell(y, x - 1);
    flipCell(y, x + 1);

    let hasWon = board.flat().every((cell) => cell === false);

    this.setState({ board, hasWon });
  }

  /** Render game board or winning message. */

  render() {
    // if the game is won, just show a winning msg & render nothing else
    // TODO
    const { board, hasWon } = this.state;

    if (!hasWon) {
      const tableRows = board.map((row, rowIndex) => (
        <tr key={rowIndex}>
          {row.map((col, colIndex) => (
            <Cell
              key={`${rowIndex}-${colIndex}`}
              coord={`${rowIndex}-${colIndex}`}
              ncols={this.props.ncols}
              nrows={this.props.nrows}
              isLit={col}
              flipCellsAroundMe={this.flipCellsAround}
            />
          ))}
        </tr>
      ));

      return (
        <div>
          <div className="Board-title">
            <div className="neon-orange">Lights</div>
            <div className="neon-blue">Out</div>
          </div>

          <table className="Board">
            <tbody> {tableRows}</tbody>
          </table>
        </div>
      );
    } else {
      return (
        <div className="winner">
          <span className="neon-orange">YOU</span>
          <span className="neon-blue">WIN!</span>
        </div>
      );
    }
  }
}

export default Board;
