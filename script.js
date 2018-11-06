//Content
const xString = "X";
const oString = "O";
//Colors
const backgroundColorPlayer2 = "red";
const borderColorPlayer2 = "red";
const backgroundColorPlayer1 = "blue";
const borderColorPlayer1 = "blue";
const backgroundColorNeutral = "grey";
const borderColorNeutral = "grey";

//Variables
var turn;
var winner;
var board;
var moves;

/*
 * Sets all variables to their correct initial states
*/
function init() {
	turn = xString;
    moves = 0;
    winner = false;
    board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

/*
 * This function is reponsible for modifying the visual state and the non-visual state of the board.
 * It responds whenever a cell in the table is clicked.
*/
function change(id) {
	//Current value of the table cell
    var text = document.getElementById(id).innerHTML;
	//If no one has won, the cell is empty and 9 moves haven't been made
    if (text === "" && !winner && moves < 9) {
        moves ++;
        document.getElementById(id).innerHTML = turn;
        board[id.charAt(3)][id.charAt(7)] = turn;
        if (turn === xString) {
            document.getElementById(id).style.backgroundColor = backgroundColorPlayer1;
            document.getElementById(id).style.borderColor = borderColorPlayer1;
            winner = winCheckX();
            if (winner) {
                document.getElementById("winner").innerHTML = xString + " HAS WON!";
            }
            turn = oString;
        } else {
            document.getElementById(id).style.backgroundColor = backgroundColorPlayer2;
            document.getElementById(id).style.borderColor = borderColorPlayer2;
            winner = winCheckO();
            if (winner) {
                document.getElementById("winner").innerHTML = oString + " HAS WON!";
            }
            turn = xString;
        }
    }
	//If it is a draw
    if (moves == 9 && winner == false) {
        document.getElementById("winner").innerHTML = "DRAW!";
    }
}

/*
 * This function checks whether player two ("X") has won the game
 * Returns true if they have and false if they haven't.
*/
function winCheckX() {
	//Horizontally
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === xString && board[i][1] === xString && board[i][2] === xString) {
            return true;
        }
    }
	//Vertically
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === xString && board[1][j] === xString && board[2][j] === xString) {
            return true;
        }
    }
	//Diagonally
    if (board[0][0] === xString && board[1][1] === xString && board[2][2] === xString) {
        return true;
    }
    if (board[2][0] === xString && board[1][1] === xString && board[0][2] === xString) {
        return true;
    }
    return false;
}

/*
 * This function checks whether player two ("O") has won the game
 * Returns true if they have and false if they haven't.
*/
function winCheckO() {
	//Horizontally
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === oString && board[i][1] === oString && board[i][2] === oString) {
            return true;
        }
    }
	//Vertically
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === oString && board[1][j] === oString && board[2][j] === oString) {
            return true;
        }
    }
	//Diagonally
    if (board[0][0] === oString && board[1][1] === oString && board[2][2] === oString) {
        return true;
    }
    if (board[2][0] === oString && board[1][1] === oString && board[0][2] === oString) {
        return true;
    }
    return false;
}

/*
 * This function effectively resets the visual representation of board as well as the data-structure representation.
 * Reloading the HTML page has the same effect; this function exists for convenience.
*/
function restart() {
	//Resets all variables
    init();
	//Resets winner text
    document.getElementById("winner").innerHTML = "";
	//Resets colors of the table
    for (var row = 0; row < 3; row++) {
        for (var column = 0; column < 3; column++) {
            var id = "row" + row + "col" + column;
            document.getElementById(id).style.backgroundColor = backgroundColorNeutral;
            document.getElementById(id).style.borderColor = borderColorNeutral;
            document.getElementById(id).innerHTML = "";
        }
    }
}

window.onload = init;