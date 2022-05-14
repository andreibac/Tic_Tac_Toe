// Variables
  let myBoard = document.getElementById('board');
  let winnerSelection = new Array();
  let player1Selection = new Array();
  let player2Selection = new Array();
  let playerTurn = 1;
  let moves = 0;

  winnerSelection = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [1, 4, 7], [2, 5, 8], [3, 6, 9], [1, 5, 9], [3, 5, 7]];

  // ===Functions===
  function drawBoard() { 
    for(let i = 1; i <= 9; ++i) {
      let mySquare = document.createElement('input'); // create input element 
      let row = document.createElement('br'); // create br element
      mySquare.type = 'text'; // set type text for the input
      mySquare.id = i;  // set id of the input
      mySquare.setAttribute('onclick', 'switchPlayer(this.id)'); // set attributes of the input
      myBoard.appendChild(mySquare);
      if(i % 3 == 0) {
        myBoard.appendChild(row); // add a row after 3 squares
      }
    }
  }

  function switchPlayer(clicked_id) {
    let myBox = document.getElementById(clicked_id);
    let myNum = parseInt(clicked_id);
    if(playerTurn == 1) {
      player1Selection.push(myNum);
      myBox.value = 'X';
      playerTurn = 2;
    } else {
      player2Selection.push(myNum);
      myBox.value = 'O';
      playerTurn = 1;
    }
    myBox.disabled = true;
    ++moves;
    checkWinner();
  }

  function checkWinner() {
    for(let i = 0; i < winnerSelection.length; ++i) {
      let value1 = document.getElementById(winnerSelection[i][0]).value;
      let value2 = document.getElementById(winnerSelection[i][1]).value;
      let value3 = document.getElementById(winnerSelection[i][2]).value;
      if(value1 == value2 && value2 == value3 && value1 == 'X') {
        alert('Player 1 wins !!!');
      } else if (value1 == value2 && value2 == value3 && value1 == 'O') {
        alert('Player 2 wins !!!');
      }
    }
    if (moves == winnerSelection.length + 1) {
        alert('Tie');
      }
  }

  drawBoard();
