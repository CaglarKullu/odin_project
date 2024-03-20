class TicTacToe {
    constructor() {
      this.board = [['', '', ''], ['', '', ''], ['', '', '']];
      this.currentPlayer = 'X';
      this.gameOver = false;
    }
  
    // Print the current state of the board to the console
    printBoard() {
      this.board.forEach(row => console.log(row.join(' | ')));
      console.log('\n');
    }
  
    // Make a move on the board
    makeMove(row, col) {
      if (this.gameOver) {
        console.log('Game over. Please restart to play again.');
        return;
      }
      if (row < 0 || row > 2 || col < 0 || col > 2 || this.board[row][col]) {
        console.log('Invalid move');
        return;
      }
  
      this.board[row][col] = this.currentPlayer;
      this.printBoard();
      if (this.checkWin()) {
        console.log(`${this.currentPlayer} wins!`);
        this.gameOver = true;
        return;
      }
      if (this.checkTie()) {
        console.log('It\'s a tie!');
        this.gameOver = true;
        return;
      }
      this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
    }
  
    // Check if the current player has won
    checkWin() {
      // Check rows, columns, and diagonals
      const lines = [
        // Rows
        [[0, 0], [0, 1], [0, 2]], [[1, 0], [1, 1], [1, 2]], [[2, 0], [2, 1], [2, 2]],
        // Columns
        [[0, 0], [1, 0], [2, 0]], [[0, 1], [1, 1], [2, 1]], [[0, 2], [1, 2], [2, 2]],
        // Diagonals
        [[0, 0], [1, 1], [2, 2]], [[2, 0], [1, 1], [0, 2]]
      ];
      for (let line of lines) {
        const [a, b, c] = line;
        if (this.board[a[0]][a[1]] && this.board[a[0]][a[1]] === this.board[b[0]][b[1]] && this.board[a[0]][a[1]] === this.board[c[0]][c[1]]) {
          return true;
        }
      }
      return false;
    }
  
    // Check for a tie (if the board is full)
    checkTie() {
      return this.board.flat().every(cell => cell);
    }
  
    // Restart the game
    restart() {
      this.board = [['', '', ''], ['', '', ''], ['', '', '']];
      this.currentPlayer = 'X';
      this.gameOver = false;
      console.log('Game restarted.');
    }
  }
  
  // Usage
  const game = new TicTacToe();
  game.printBoard(); // To print the initial empty board
  // Use game.makeMove(row, col) to make a move, where row and col are 0-indexed
  // For example, game.makeMove(0, 0) for the top-left corner
  // Use game.restart() to restart the game

  document.addEventListener('DOMContentLoaded', () => {
    const game = new TicTacToe();
    const cells = document.querySelectorAll('.cell');
    const restartButton = document.getElementById('restart-button');

    // Function to update the UI based on the game board state
    function updateUI() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                cell.textContent = game.board[row][col]; // Update each cell with the board state
            }
        }
    }

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const row = parseInt(cell.getAttribute('data-row'));
            const col = parseInt(cell.getAttribute('data-col'));
            if (!game.board[row][col] && !game.gameOver) {
                game.makeMove(row, col);
                updateUI(); // Update the UI after each move
                if (game.checkWin()) {
                    setTimeout(() => alert(`${game.currentPlayer} wins!`), 100); // Delayed alert for better UX
                    game.gameOver = true;
                } else if (game.checkTie()) {
                    setTimeout(() => alert('It\'s a tie!'), 100); // Delayed alert for better UX
                    game.gameOver = true;
                }
                game.currentPlayer = game.currentPlayer === 'X' ? 'O' : 'X';
            }
        });
    });

    restartButton.addEventListener('click', () => {
        game.restart();
        updateUI(); // Make sure the UI is updated when the game is restarted
    });

    // Initial UI update
    updateUI();
});