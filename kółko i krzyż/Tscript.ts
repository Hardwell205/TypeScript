class Board {
    board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    table: HTMLElement [];
    turn: boolean;
    playerX: number = -1;
    playerO: number = 1;
    constructor(t:HTMLElement[]){
        this.table = t;         
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }
    Draw(): boolean{
        for (let i=0; i <9; i++){
            if(this.board[i]==0)
            return false;
        }
        return true;
    }
    ClickCell(x: number, y: number){
        if(this.turn==true){
            
                var P = 3 * (x - 1) + (y - 1);
                if (this.board[P] == this.playerX || this.board[P] == this.playerO) {
                    alert("To pole jest już zajęte");
                }
                else {
                    this.table[P].style.color = "#25bfc4";
                    this.table[P].innerHTML = "O";
                    this.board[P] = 1;
                    this.turn = false;
                }
        
        if(this.win(this.board)==1){
                alert("Wygrywa O!");
        }
        else if(this.Draw()){
            alert('Remis!')
        }
            }
        
            else{
            var P = 3 * (x - 1) + (y - 1);
            if (this.board[P] == this.playerO || this.board[P] == this.playerX) {
                alert("To pole jest już zajęte");
            }
            else {
                this.table[P].style.color = "#25bfc4";
                this.table[P].innerHTML = "X";
                this.board[P] = -1;
                this.turn = true;
            }
            if(this.win(this.board)==-1){
                alert("Wygrywa X!");
            }
            else if(this.Draw()){
                alert('Remis!')
            }
                }
        }
        win(board: number[]): number {
            var b = board[1];
            if (board[0] == b && b == board[2] && b != 0) return b;
            b = board[4];
            if (board[3] == b && b == board[5] && b != 0) return b;
            b = board[7];
            if (board[6] == b && b == board[8] && b != 0) return b;
            b = board[3];
            if (board[0] == b && b == board[6] && b != 0) return b;
            b = board[4];
            if (board[1] == b && b == board[7] && b != 0) return b;
            b = board[5];
            if (board[2] == b && b == board[8] && b != 0) return b;
            b = board[4];
            if (board[0] == b && b == board[8] && b != 0) return b;
            if (board[2] == b && b == board[6] && b != 0) return b;
            return 0;
}}

window.onload = () => {
    let cell11: HTMLElement = <HTMLElement>document.getElementById("cell11");
    let cell12: HTMLElement = <HTMLElement>document.getElementById("cell12");
    let cell13: HTMLElement = <HTMLElement>document.getElementById("cell13");
    let cell21: HTMLElement = <HTMLElement>document.getElementById("cell21");
    let cell22: HTMLElement = <HTMLElement>document.getElementById("cell22");
    let cell23: HTMLElement = <HTMLElement>document.getElementById("cell23");
    let cell31: HTMLElement = <HTMLElement>document.getElementById("cell31");
    let cell32: HTMLElement = <HTMLElement>document.getElementById("cell32");
    let cell33: HTMLElement = <HTMLElement>document.getElementById("cell33");

let cell: Board = new Board([cell11, cell12, cell13, cell21, cell22, cell23, cell31, cell32, cell33]);
cell11.onclick = () => { cell.ClickCell(1, 1);}
cell12.onclick = () => { cell.ClickCell(1, 2);}
cell13.onclick = () => { cell.ClickCell(1, 3);}
cell21.onclick = () => { cell.ClickCell(2, 1);}
cell22.onclick = () => { cell.ClickCell(2, 2);}
cell23.onclick = () => { cell.ClickCell(2, 3);}
cell31.onclick = () => { cell.ClickCell(3, 1);}
cell32.onclick = () => { cell.ClickCell(3, 2);}
cell33.onclick = () => { cell.ClickCell(3, 3);}
}c