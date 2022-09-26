import { Component, OnInit,Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ISpaceObject } from 'src/app/Models/Interface/ISpaceObject';
import { CreateSpaceObjectService } from 'src/app/Services/create-space-object.service';
import { ModalService } from 'src/app/Services/modal.service';
import { SpaceObjectService } from 'src/app/Services/SpaceObjectService/space-object.service';
import { SapceSystemService } from 'src/app/Services/SpaceSystemService/sapce-system.service';
import{ISpaceSystem}from "../../Models/Interface/ISpaceSystem"


@Component({
  selector: 'app-space-system',
  templateUrl: './space-system.component.html',
 
})
export class SpaceSystemComponent implements OnInit {
  @Input() system : ISpaceSystem;
  @Input() objectsSystem$:Observable<ISpaceObject[]>;
  @Input() enableObject = false;
  
  objectVisible= false;
  constructor(
    private systemService: SapceSystemService,
    private objectService: SpaceObjectService,
    public modalService: ModalService,
    public createSpaceObjectService:CreateSpaceObjectService
    

  
 
    ){}
  ngOnInit(): void {
  }
   getSystemObjects(){
   this.objectsSystem$= this.objectService.GetBySpaceSystemId(this.system);
  
  }
  deleteSpaceSystem(system:ISpaceSystem){
    this.systemService.Delete(system);
  }
  redactSpaceSystem(system:ISpaceSystem){
   
  }
  
}
