import {Component} from '@angular/core';

@Component({
 selector:'app-heroe',
 templateUrl:'heroe.component.html'

})

export class heroecomponent{
nombre: string = 'iroman';
edad:number= 29;

get nombreCapitalizado(){
    return this.nombre.toUpperCase();
}

obtenernombre(): string{
return `${this.nombre} - ${this.edad}`;
}

CambiarNombre():void{
    this.nombre = 'spider';
}

Cambiaredad(): void{
    this.edad = 121;
}
}