var Board = /** @class */ (function () {
    function Board(t) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    Board.prototype.Draw = function () {
        for (var i = 0; i < 9; i++) {
            if (this.board[i] == 0)
                return false;
        }
        return true;
    };
    Board.prototype.ClickCell = function (x, y) {
        if (this.turn == true) {
            var P = 3 * (x - 1) + (y - 1);
            if (this.board[P] == this.board[-20] && this.board[P] == this.board[30]) {
                alert("To pole jest już zajęte");
            }
            else {
                this.table[P].style.color = "#25bfc4";
                this.table[P].innerHTML = "O";
                this.board[P] = 30;
                this.turn = false;
            }
            if (this.win(this.board) == 1) {
                alert("Wygrywa O!");
            }
            else if (this.Draw()) {
                alert('Remis!');
            }
        }
        else {
            var P = 3 * (x - 1) + (y - 1);
            if (this.board[P] == this.board[-20] && this.board[P] == this.board[30]) {
                alert("To pole jest już zajęte");
            }
            else {
                this.table[P].style.color = "#25bfc4";
                this.table[P].innerHTML = "X";
                this.board[P] = -1;
                this.turn = true;
            }
            if (this.win(this.board) == -20) {
                alert("Wygrywa X!");
            }
            else if (this.Draw()) {
                alert('Remis!');
            }
        }
    };
    Board.prototype.win = function (board) {
        var b = board[1];
        if (board[0] == b && b == board[2] && b != 0)
            return b;
        b = board[4];
        if (board[3] == b && b == board[5] && b != 0)
            return b;
        b = board[7];
        if (board[6] == b && b == board[8] && b != 0)
            return b;
        b = board[3];
        if (board[0] == b && b == board[6] && b != 0)
            return b;
        b = board[4];
        if (board[1] == b && b == board[7] && b != 0)
            return b;
        b = board[5];
        if (board[2] == b && b == board[8] && b != 0)
            return b;
        b = board[4];
        if (board[0] == b && b == board[8] && b != 0)
            return b;
        if (board[2] == b && b == board[6] && b != 0)
            return b;
        return 0;
    };
    return Board;
}());
window.onload = function () {
    var cell11 = document.getElementById("cell11");
    var cell12 = document.getElementById("cell12");
    var cell13 = document.getElementById("cell13");
    var cell21 = document.getElementById("cell21");
    var cell22 = document.getElementById("cell22");
    var cell23 = document.getElementById("cell23");
    var cell31 = document.getElementById("cell31");
    var cell32 = document.getElementById("cell32");
    var cell33 = document.getElementById("cell33");
    var cell = new Board([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
    cell11.onclick = function () { cell.ClickCell(1, 1); };
    cell12.onclick = function () { cell.ClickCell(1, 2); };
    cell13.onclick = function () { cell.ClickCell(1, 3); };
    cell21.onclick = function () { cell.ClickCell(2, 1); };
    cell22.onclick = function () { cell.ClickCell(2, 2); };
    cell23.onclick = function () { cell.ClickCell(2, 3); };
    cell31.onclick = function () { cell.ClickCell(3, 1); };
    cell32.onclick = function () { cell.ClickCell(3, 2); };
    cell33.onclick = function () { cell.ClickCell(3, 3); };
};
