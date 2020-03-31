var Board = /** @class */ (function () {
    function Board(t) {
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.table = t;
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    Board.prototype.ClickCell = function (x, y) {
        var p = 3 * (x - 1) + (y - 1);
        this.table[p].style.color = "#25bfc4";
        this.table[p].innerHTML = "O";
        this.table[p].style.color = "#25bfc4";
        this.table[p].innerHTML = "X";
    };
    return Board;
}());
function next(x, y) {
    var p = 3 * (x - 1) + (y - 1);
    this.table[p].style.color = "#25bfc4";
    this.table[p].innerHTML = "O";
}
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
    var button = document.getElementById("switch");
    var cell = new Board([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
    cell11.onclick = function (e) { cell.ClickCell(1, 1); };
    cell12.onclick = function (e) { cell.ClickCell(1, 2); };
    cell13.onclick = function (e) { cell.ClickCell(1, 3); };
    cell21.onclick = function (e) { cell.ClickCell(2, 1); };
    cell22.onclick = function (e) { cell.ClickCell(2, 2); };
    cell23.onclick = function (e) { cell.ClickCell(2, 3); };
    cell31.onclick = function (e) { cell.ClickCell(3, 1); };
    cell32.onclick = function (e) { cell.ClickCell(3, 2); };
    cell33.onclick = function (e) { cell.ClickCell(3, 3); };
};
