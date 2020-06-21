import {Field} from "./interfacefield";

export class Mail implements Field{
    name: string;
    labelvaule: string;
    label: HTMLLabelElement;
    element: HTMLInputElement;

    constructor(name:string, label: string){
        this.name = name;
        this.labelvaule = label;
        this.element = <HTMLInputElement>document.createElement("input");
        this.element.name=  this.name;
        this.element.type = "email";
        this.label = <HTMLLabelElement>document.createElement("label");
        this.label.innerHTML= this.labelvaule;

    }

    render(): HTMLElement {
       return this.element;
    }
    getValue() {
        return this.element.value;
    }
    setValue(value: string): void {
        this.element.value = value;
    }

}