
class TicTacToe {    
    /**
     * Initial setup
     */
    constructor() {
    // Initial setup
    this.resetGame();
    this.loadGameState(); // Loads game state from local storage or sets default values
}

    /**
     * Resets the game state to its initial values.
     *
     * @return {void} 
     */
resetGame() {
    this.board = [['', '', ''], ['', '', ''], ['', '', '']];
    this.currentPlayer = 'X';
    this.gameOver = false;
    this.aiMode = false; // AI is disabled by default
    this.scores = { 'X': 0, 'O': 0 };
}

    /**
     * Toggles the AI mode of the game.
     *
     * @return {void} This function does not return a value.
     */
toggleAiMode() {
    this.aiMode = !this.aiMode;
    console.log(`AI Mode: ${this.aiMode ? 'On' : 'Off'}`);
    this.saveGameState();
}

/**
 * Loads the game state from the local storage and updates the game properties accordingly.
 *
 * @return {void} 
 */
loadGameState() {
    const savedState = localStorage.getItem('ticTacToeGameState');
    if (savedState) {
        const state = JSON.parse(savedState);
        this.board = state.board;
        this.currentPlayer = state.currentPlayer;
        this.gameOver = state.gameOver;
        this.scores = state.scores;
        this.aiMode = state.aiMode; // Ensure AI mode is also loaded
    }
}

    /**
     * Saves the current game state to the local storage.
     *
     * @return {void} This function does not return anything.
     */
saveGameState() {
    const gameState = {
        board: this.board,
        currentPlayer: this.currentPlayer,
        gameOver: this.gameOver,
        aiMode: this.aiMode, // Save the AI mode state as well
        scores: this.scores
    };
    localStorage.setItem('ticTacToeGameState', JSON.stringify(gameState));
}
    // toggle the AI mode
    toggleAiMode() {
        this.aiMode = document.getElementById('toggle-ai-mode').checked;
        document.getElementById('toggle-ai-mode').textContent = `AI Mode is ${this.aiMode ? 'On' : 'Off'}`;
        console.log(`AI Mode: ${this.aiMode ? 'On' : 'Off'}`);
    }
    // increment the score of the winner
    incrementScore(winner) {
        if (this.scores.hasOwnProperty(winner)) {
            this.scores[winner]++;
            document.getElementById(`${winner.toLowerCase()}-score`).querySelector('span').textContent = this.scores[winner];
            
            // Save the game state after incrementing the score
            this.saveGameState();
        }
    }

        // Reset scores and update the UI
        resetScores() {
            this.scores['X'] = 0;
            this.scores['O'] = 0;
            document.getElementById('x-score').querySelector('span').textContent = 0;
            document.getElementById('o-score').querySelector('span').textContent = 0;
        
            // Save the game state after resetting the scores
            this.saveGameState();
        }
    // Print the current state of the board to the console
    printBoard() {
      this.board.forEach(row => console.log(row.join(' | ')));
      console.log('\n');
    }
  
    // Make a move on the board
    makeMove(row, col, updateUI) {
        if (this.gameOver || this.board[row][col]) {
            console.log('Invalid move or game over.');
            return;
        }
    
        this.board[row][col] = this.currentPlayer;
        this.printBoard();
        this.evaluateGameState();
    
        // Trigger AI move if it's AI's turn and the game is not over
        if (!this.gameOver && this.aiMode && this.currentPlayer === 'O') {
            setTimeout(() => {
                this.aiMove();
                updateUI();
            }, 500);
        }
    }
    
    /**
     * Evaluate the current state of the game, check for a win or tie, update scores, and switch players if necessary.
     *
     * @param None
     * @return None
     */
    evaluateGameState() {
        if (this.checkWin()) {
            console.log(`${this.currentPlayer} wins!`);
            this.incrementScore(this.currentPlayer);
            this.gameOver = true;
        } else if (this.checkTie()) {
            console.log('It\'s a tie!');
            this.gameOver = true;
        } else {
            this.currentPlayer = this.currentPlayer === 'X' ? 'O' : 'X';
        }
        this.saveGameState();
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
    // Save the game state to local storage
    saveGameState() {
        const gameState = {
          board: this.board,
          currentPlayer: this.currentPlayer,
          gameOver: this.gameOver,
          scores: this.scores
        };
        localStorage.setItem('ticTacToeGameState', JSON.stringify(gameState));
      }
      // delete the game state from local storage
      clearSavedGameState() {
        localStorage.removeItem('ticTacToeGameState');
        console.log('Saved game state has been cleared.');
    }

    /**
     * AI makes a move based on a set of prioritized strategies.
     *
     */
    aiMove() {
        
        // Priority 1: Check if AI can win in the next move
        let move = this.findWinningMove('O');
        if (move) {
            this.makeMove(move.row, move.col);
            return;
        }
    
        // Priority 2: Block X's winning move
        move = this.findWinningMove('X');
        if (move) {
            this.makeMove(move.row, move.col);
            return;
        }
    
        // Priority 3: Try to take the center if it's free
        if (!this.board[1][1]) {
            this.makeMove(1, 1);
            return;
        }
    
        // Priority 4: Take opposite corner or any corner
        move = this.takeOppositeCornerOrAnyCorner();
        if (move) {
            this.makeMove(move.row, move.col);
            return;
        }
    
        // Priority 5: Take any side
        move = this.takeAnySide();
        if (move) {
            this.makeMove(move.row, move.col);
        }
      
    }
    /**
     * Finds a winning move for the given player on the game board.
     *
     * @param {string} player - The player symbol ('X' or 'O').
     * @return {Object|null} - An object with the coordinates of the winning move if found, or null if no winning move is found.
     */
findWinningMove(player) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (this.board[i][j]) continue; // Skip occupied cells
            this.board[i][j] = player; // Try a move
            let winning = this.checkWin(); // See if it's a winning move
            this.board[i][j] = ''; // Undo the move
            if (winning) return { row: i, col: j };
        }
    }
    return null;
}
takeOppositeCornerOrAnyCorner() {
    const corners = [
        {row: 0, col: 0, opposite: {row: 2, col: 2}},
        {row: 0, col: 2, opposite: {row: 2, col: 0}},
        {row: 2, col: 0, opposite: {row: 0, col: 2}},
        {row: 2, col: 2, opposite: {row: 0, col: 0}}
    ];

    // Check for opposite corners first
    for (let i = 0; i < corners.length; i++) {
        const corner = corners[i];
        if (this.board[corner.row][corner.col] === 'X' && !this.board[corner.opposite.row][corner.opposite.col]) {
            return corner.opposite;
        }
    }

    // If no opposite corner can be taken, take any available corner
    for (let i = 0; i < corners.length; i++) {
        const corner = corners[i];
        if (!this.board[corner.row][corner.col]) {
            return corner;
        }
    }

    // If no corners are available, return null
    return null;
}
takeAnySide() {
    const sides = [
        {row: 0, col: 1},
        {row: 1, col: 0}, {row: 1, col: 2},
        {row: 2, col: 1}
    ];

    for (const side of sides) {
        if (!this.board[side.row][side.col]) {
            return side;
        }
    }

    return null; // If no sides are available
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
    const aiModeToggle = document.getElementById('toggle-ai-mode');
    aiModeToggle.checked = game.aiMode;
    aiModeToggle.addEventListener('change', () => {
        game.toggleAiMode();
    });
    updateScoreDisplay(); // Update the score display

    const restartButton = document.getElementById('restart-button');
    function updateScoreDisplay() {
        document.getElementById('x-score').querySelector('span').textContent = game.scores['X'];
        document.getElementById('o-score').querySelector('span').textContent = game.scores['O'];
    }


    // Function to update the UI based on the game board state
    function updateUI() {
        for (let row = 0; row < 3; row++) {
            for (let col = 0; col < 3; col++) {
                const cell = document.querySelector(`.cell[data-row="${row}"][data-col="${col}"]`);
                cell.textContent = game.board[row][col]; 
            }
        }
    }
    // Add event listeners to the restart button
    const newGameButton = document.getElementById('new-game-button');

    newGameButton.addEventListener('click', () => {
        console.log('New game button clicked');
        game.restart(); 
        game.clearSavedGameState();
        updateUI();
        window.location.reload();
    });

    // Add event listeners to the cells
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => {
        cell.addEventListener('click', event => {
            const row = parseInt(event.target.dataset.row, 10);
            const col = parseInt(event.target.dataset.col, 10);
            game.makeMove(row, col, updateUI);
            updateUI();
            if(game.checkWin()) {
                setTimeout(() => alert(`${game.currentPlayer} wins!`), 100); 
            }
            if(game.checkTie() && !game.checkWin()) {
                setTimeout(() => alert('It\'s a tie!'), 100);
             }
        });
    });

    // Add event listeners to the restart button
    document.getElementById('restart-button').addEventListener('click', () => {
        game.resetGame();
        game.saveGameState();
     
    });

    restartButton.addEventListener('click', () => {
        game.restart();
        updateUI(); 
    });

   
    updateUI();
});