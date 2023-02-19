import { Component } from "@angular/core";

@Component({
    selector: 'app-contador',
    template: `
    
    <h1> {{ titulo }} </h1>
    <h3>La base es: <strong> {{base}} </strong></h3>

    <button (click)="operacion(base)"> + {{base}} </button>

    <span> {{ numero }} </span>

    <button (click)="operacion(-base)"> - {{base}} </button>

    `
})

export class ContadorComponent{
    public titulo : string = 'Contador App';
    public numero : number = 0;
    public base   : number = 10;

    operacion( numero: number){
        this.numero = this.numero + numero;
      }

}