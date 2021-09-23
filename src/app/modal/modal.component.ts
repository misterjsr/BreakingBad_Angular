import { Component, OnInit, Input} from '@angular/core';
import { Character } from '../models/character';
import { ModalService } from '../modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})

export class ModalComponent implements OnInit {
  @Input () character : Character[] = []; 
  public modal : Character[] = []; 
  
  constructor(private _actor: ModalService  ) {  }

  ngOnInit(): void{ 
    this._actor.upModal.subscribe(data => {
      this.modal.push(data.data);
    })
   }

  clearModal(){  
    this.modal = []; 
  }
}