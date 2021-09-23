import { Injectable, Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
 @Output() upModal : EventEmitter<any> = new EventEmitter();
  constructor() { }
}
