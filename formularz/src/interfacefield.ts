 export interface Field{
    name: string;
    labelvaule: string;
    label: HTMLLabelElement;
    render(): HTMLElement;
    getValue(): any;
    setValue(value:string) :any; 
}