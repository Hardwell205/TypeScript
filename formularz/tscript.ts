enum FieldType {
    Imie = 1,
    Nazwisko,
    Mail,
    Select,
    Checkbox,
    Uwagi,
}
interface Field{
    name: string;
    label: string;
    type: FieldType;
    render(): HTMLElement;
    getValue(): any;
}

class NameFiled implements Field{
        name: string;
        label: string; 
        type: FieldType;
        element: HTMLInputElement;

        constructor(name: string, label: string){
            this.element = <HTMLInputElement>document.createElement('input');
            this.name = name;
            this.label = label;
            this.element.name = this.name;
        }
        render(): HTMLElement{
            return this.element;
        }
        getValue(): any{
            return this.element.value
        }
}
class SurNameFiled implements Field{
    name: string;
    label: string; 
    type: FieldType;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    render(): HTMLElement{
        return this.element;
    }
    getValue(): any{
        return this.element.value
    }
}
class MailField implements Field{
    name: string;
    label: string; 
    type: FieldType;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    render(): HTMLElement{
        return this.element;
    }
    getValue(): any{
        return this.element.value
    }
}
class SelectFiled implements Field{
    name: string;
    label: string; 
    type: FieldType;
    element: HTMLSelectElement;
    opt1: string = "informatyka";
    opt2: string = "Inżynieria";

    constructor(name: string, label: string){
        this.element = <HTMLSelectElement>document.createElement('select');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    render(): HTMLElement{
        return this.element;
    }
    getValue(): any{
        return this.element.value
    }
}
class CheckFiled implements Field{
    name: string;
    label: string; 
    type: FieldType;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element = <HTMLInputElement>document.createElement("checkbox")
        this.name = name;
        this.label = label;
        this.element.name = this.name;
    }
    render(): HTMLElement{
        return this.element;
    }
    getValue(): any{
        return this.element.value
    }
}