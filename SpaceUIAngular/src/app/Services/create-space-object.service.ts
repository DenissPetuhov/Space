import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ISpaceSystem } from '../Models/Interface/ISpaceSystem';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSpaceObjectService {
  constructor(
    public modalService:ModalService){

  }
  isVisible$=new BehaviorSubject<boolean>(false);
  open(){
   this.isVisible$.next(true)
  }
  close(){
   this.isVisible$.next(false)
  }
  openCreateObjectPanel(system:ISpaceSystem){
    this.modalService.open();
    this.open();

   
  }
  closeCreateObjectPanel(){
    this.modalService.close();
    this.close();

  }
}