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

var turn = xString;
var winner = false;
var board;
var moves = 0;

function init() {
    board = [
        ["","",""],
        ["","",""],
        ["","",""]
    ];
}

function change(id) {
    var text = document.getElementById(id).innerHTML;
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
    if (moves == 9 && winner == false) {
        document.getElementById("winner").innerHTML = "DRAW!";
    }
}

function winCheckX() {
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === xString && board[i][1] === xString && board[i][2] === xString) {
            return true;
        }
    }
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === xString && board[1][j] === xString && board[2][j] === xString) {
            return true;
        }
    }
    if (board[0][0] === xString && board[1][1] === xString && board[2][2] === xString) {
        return true;
    }
    if (board[2][0] === xString && board[1][1] === xString && board[0][2] === xString) {
        return true;
    }
    return false;
}

function winCheckO() {
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === oString && board[i][1] === oString && board[i][2] === oString) {
            return true;
        }
    }
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === oString && board[1][j] === oString && board[2][j] === oString) {
            return true;
        }
    }
    if (board[0][0] === oString && board[1][1] === oString && board[2][2] === oString) {
        return true;
    }
    if (board[2][0] === oString && board[1][1] === oString && board[0][2] === oString) {
        return true;
    }
    return false;
}

function restart() {
    turn = xString;
    moves = 0;
    winner = false;
    init();
    document.getElementById("winner").innerHTML = "";
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