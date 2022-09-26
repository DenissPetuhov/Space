import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class CreateSpaceSystemService {
  constructor(public modalService: ModalService){}
  isVisible$=new BehaviorSubject<boolean>(false);
  open(){
   this.isVisible$.next(true)
  }
  close(){
   this.isVisible$.next(false)
  }
  openCreateSystemPanel(){
    this.modalService.open();
    this.open();
  }
  closeCreateSystemPanel(){
    this.modalService.close();
    this.close();
  }
}
