import {Component} from '@angular/core';
@Component({
    selector:'app-contador',
    template:`

    <h1>{{title}}</h1>

    <button (click)= "acumular(base);" >{{base}}</button>
    <span> {{numero}}</span>

    <h3>La base es : <strong>{{base}}</strong></h3>

    <button (click)="acumular(-base);">{{base}}</button>
    `
})
export class ContadorComponent{


    public title:string = 'La bodeguita';
    numero:number = 10;
    base:number = 55;

    acumular(valor:number){
        this.numero += valor;
    }

}