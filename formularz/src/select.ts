import {Field} from "./interfacefield";

export class Select implements Field{
    name: string;
    labelvaule: string;
    label: HTMLLabelElement;
    element: HTMLSelectElement;

    constructor(name:string, label: string){
        this.name = name;
        this.labelvaule = label;
        this.element = <HTMLSelectElement>document.createElement("select");
        this.element.name=  this.name;
        this.label = <HTMLLabelElement>document.createElement("label");
        this.label.innerHTML= this.labelvaule;
        let option = <HTMLOptionElement>document.createElement("option");
        let options1 = <HTMLOptionElement>document.createElement("option");
        option.text="Informatyka i Ekonometria";
        option.value="Informatyka i Ekonometria";
        this.element.options.add(option);
        options1.text="Zarządzanie";
        options1.value="Zarządzanie";
        this.element.options.add(options1);
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