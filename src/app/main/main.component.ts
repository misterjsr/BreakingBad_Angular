import { Component, OnInit, OnChanges } from '@angular/core';
import { BBService } from '../breakingbadapi.service';
import { Character } from '../models/character';
import { ModalService } from '../modal.service';

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.css']
})

export class MainComponent{
    listaActores: Character[] = [];  
    lista = "Personaje";
    search = '';

    constructor(private _listaActores: BBService, private _actor: ModalService) {}
   
    ngOnInit(): void{
        this.obtenerActores();
    }

    obtenerActores(){
        this._listaActores.getActores().subscribe(data => {
            this.listaActores = data;
          }, error => {
            console.log(error);
          });
    }

    seeModal(character:Character){
        this._actor.upModal.emit({
            data : character
        });
    }

    seeAll(){
        this.search = ' ';
    }
}
