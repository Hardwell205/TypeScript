export class Table{
    LSvalues: Array<object>;
    tableElement: HTMLElement;

    constructor(id: string){
        this.tableElement= document.querySelector("#" + id);
        this.LSvalues = JSON.parse(localStorage.getItem("Key"));
        console.log(this.LSvalues);
    }
    render():void{
        let table= document.createElement("table");
        let tr;
        let td;
        for(let i= 0; i <this.LSvalues.length; i++){
            tr = table.insertRow();
            for(const key in this.LSvalues[i]){
                td = document.createElement("td");
                td.innerHTML=this.LSvalues[i][key];
                tr.appendChild(td);
            }
        }
        this.tableElement.appendChild(table);
    }
}