import {Component } from '@angular/core';


@Component({
    selector: 'app-contador',
    template: `
<h1>{{titulo}}</h1>
<h3>las base es:<strong>{{base}}</strong> </h3>

 <button (click)=" acumular(base)">{{base}} </button>

 <span>{{numero}}
    <button (click)="acumular(-base)">-{{base}}</button>
 </span>
`
})

export class contadorcomponent{
    titulo: string ='Contador app';
    numero: number=10;  
    base: number = 5;
    acumular(valor:number){
    this.numero +=valor;
    }
}

function button(click: any) {
    throw new Error('Function not implemented.');
}
