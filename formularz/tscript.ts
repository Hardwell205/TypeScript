enum FiledType{
    textInput = 'text',
    mailInput = 'email',
    checkBox = 'checkbox',
    textArea = 'textarea',
    submitButton = 'submit'
}

interface Field{
    name: string;
    label: string;
    type: FiledType;
    render(): HTMLElement;
    getValue(): any;
}

class App{

}


class InputField implements Field{
    name: string;
    label: string;
    type: FiledType;
    element: HTMLInputElement;

    constructor(name: string, label: string){
        this.element=
        <HTMLInputElement>document.createElement('input');
        this.name = name;
        this.label = label;
        this.element.name = this.name;
        this.element.type = FiledType.textInput;
    }
    render(): HTMLElement {
        let div = document.createElement('div');
        let label = <HTMLLabelElement> document.createElement('label')
        label.htmlFor = this.element.id;
        label.innerText= this.label;

        div.appendChild(label);
        div.appendChild(this.element);

        return div;
    }

    getValue() : any{
        return this.element.value
    }
}

class From{
    fields: Field [];
formElement: HTMLElement;

constructor(id: string){
    this.fields = new Array ();
    this.formElement = document.getElementById(id);
}

render(): void{
    
}

getValue(){

}
}