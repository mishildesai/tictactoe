var turn = "X";
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
        if (turn === "X") {
            document.getElementById(id).style.backgroundColor = "blue";
            document.getElementById(id).style.borderColor = "blue";
            winner = winCheckX();
            if (winner) {
                document.getElementById("winner").innerHTML = "X HAS WON!";
            }
            turn = "O";
        } else {
            document.getElementById(id).style.backgroundColor = "red";
            document.getElementById(id).style.borderColor = "red";
            winner = winCheckO();
            if (winner) {
                document.getElementById("winner").innerHTML = "O HAS WON!";
            }
            turn = "X";
        }
    }
    if (moves == 9 && winner == false) {
        document.getElementById("winner").innerHTML = "DRAW!";
    }
}

function winCheckX() {
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === "X" && board[i][1] === "X" && board[i][2] === "X") {
            return true;
        }
    }
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === "X" && board[1][j] === "X" && board[2][j] === "X") {
            return true;
        }
    }
    if (board[0][0] === "X" && board[1][1] === "X" && board[2][2] === "X") {
        return true;
    }
    if (board[2][0] === "X" && board[1][1] === "X" && board[0][2] === "X") {
        return true;
    }
    return false;
}

function winCheckO() {
    for (var i = 2; i >= 0; i--) {
        if (board[i][0] === "O" && board[i][1] === "O" && board[i][2] === "O") {
            return true;
        }
    }
    for (var j = 2; j >= 0; j--) {
        if (board[0][j] === "O" && board[1][j] === "O" && board[2][j] === "O") {
            return true;
        }
    }
    if (board[0][0] === "O" && board[1][1] === "O" && board[2][2] === "O") {
        return true;
    }
    if (board[2][0] === "O" && board[1][1] === "O" && board[0][2] === "O") {
        return true;
    }
    return false;
}

function restart() {
    turn = "X";
    moves = 0;
    winner = false;
    init();
    document.getElementById("winner").innerHTML = "";
    for (var row = 0; row < 3; row++) {
        for (var column = 0; column < 3; column++) {
            var id = "row" + row + "col" + column;
            document.getElementById(id).style.backgroundColor = "grey";
            document.getElementById(id).style.borderColor = "grey";
            document.getElementById(id).innerHTML = "";
        }
    }
}

window.onload = init;