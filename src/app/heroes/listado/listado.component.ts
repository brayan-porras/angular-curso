import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
 
})
export class ListadoComponent  {
[x: string]: any;

//constructor() { 
// console.log('constructor'); } ngOnInit(): void {    console.log('ngOnInit'); }
heroes: string[]= ['spider','sper','caroo','fhhhh'];
borrado: string ='';
borrar(){
  this.borrado = this.heroes.shift()||'';
 

}

}
