import {Field} from  "./interfacefield";

export class Form{
    fields: Field[];
    formelement: HTMLElement;
    valeuesArray: any[];

    constructor(id:string){
        this.fields = new Array();
        this.valeuesArray = new Array();
        this.formelement =document.querySelector("#"+ id);
    }

    render(): void{
        this.fields.forEach(element =>{
            let div = <HTMLElement>document.createElement("div");
            div.appendChild(element.label);
            div.appendChild(element.render());
            this.formelement.appendChild(div);
        });
    }
    getValues(): any[]  {
        this.fields.forEach(element => {
            this.valeuesArray.push({
                label: element.labelvaule,
                value: element.getValue()
            });
        });
        return this.valeuesArray;
    }

    
    }