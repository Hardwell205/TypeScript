import {Field} from "./interfacefield";

export class TextArea implements Field{
    name: string;
    labelvaule: string;
    label: HTMLLabelElement;
    element: HTMLTextAreaElement;

    constructor(name:string, label: string){
        this.name = name;
        this.labelvaule = label;
        this.element = <HTMLTextAreaElement>document.createElement("textarea");
        this.element.name=  this.name;
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