import { NgModule } from '@angular/core';
import { heroecomponent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
declarations:[
heroecomponent,
ListadoComponent
],
exports:[
    ListadoComponent,
],
imports :[
    BrowserModule
]

})
export class HeroeModule {

}