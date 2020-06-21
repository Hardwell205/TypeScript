import {Textbox} from "./textbox";
import { Form } from "./form";
import {Field} from  "./interfacefield";
import {Table} from "./table";
import { TextArea } from "./textArea";
import { Mail } from "./mail";
import { Select } from "./select";
import { CheckBox } from "./checkbox";

class App{
    form : Form;

    constructor(...elements: Field[]){
        this.form = new Form("IDform");
        this.form.fields.push(...elements);

        document.querySelector("#push").addEventListener("click", () =>this.saveToLS())
        document.querySelector("#values").addEventListener("click", () =>this.savedDate())
    }
    saveToLS(){
        console.log("sent LS");
        localStorage.setItem("Key", JSON.stringify(this.form.getValues()));
    } 
    appstart(){
        this.form.render();
    }
    savedDate(){
        const table = new Table("dane");
        table.render()
    }
}

const textbox = new Textbox("Imię", "Imię: ");
const textboxName = new Textbox ("Nazwisko", "Nazwisko: ")
const mail = new Mail("Mail","Mail: ",)
const select = new Select("Select","Na jakim kierunku studiujesz?")
const textarea = new TextArea("Uwagi","Uwagi: ");
const checkbox = new CheckBox("CheckBox","Preferujesz e-lerning?")
window.onload = function(){
    const app =  new App(textbox, textboxName,mail,select, checkbox, textarea);    
    app.appstart();

}