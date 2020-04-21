class Board {
    board: number[] = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    table: HTMLElement [];

    constructor(t:HTMLElement[]){
        this.table = t;         
        this.board = [0, 0, 0, 0, 0, 0, 0, 0, 0];
    }

    ClickCell(x: number, y: number){
        
   
        var p = 3 * (x - 1) + (y - 1);
        this.table[p].style.color = "#25bfc4";
        this.table[p].innerHTML = "O";
        }
    ClickCell1(x: number, y: number){
        
   
            var p = 3 * (x - 1) + (y - 1);
            this.table[p].style.color = "#25bfc4";
            this.table[p].innerHTML = "O";
            }
    }

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
cell11.onclick = (e) => { cell.ClickCell(1, 1);}
cell12.onclick = (e) => { cell.ClickCell(1, 2);}
cell13.onclick = (e) => { cell.ClickCell(1, 3);}
cell21.onclick = (e) => { cell.ClickCell(2, 1);}
cell22.onclick = (e) => { cell.ClickCell(2, 2);}
cell23.onclick = (e) => { cell.ClickCell(2, 3);}
cell31.onclick = (e) => { cell.ClickCell(3, 1);}
cell32.onclick = (e) => { cell.ClickCell(3, 2);}
cell33.onclick = (e) => { cell.ClickCell(3, 3);}
}