import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { ModalService } from './modal.service';

@Injectable({
  providedIn: 'root'
})
export class RedactSystemService {
  constructor(public modalService: ModalService){}
  isVisible$=new BehaviorSubject<boolean>(false);
  open(){
   this.isVisible$.next(true)
  }
  close(){
   this.isVisible$.next(false)
  }
  openRedactSystemPanel(){
    this.modalService.open();
    this.open();
  }
}
