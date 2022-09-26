import { Component, Output } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { CreateSpaceobjectComponent } from './Components/create-spaceobject/create-spaceobject.component';
import { RedactSpaceSystemComponent } from './Components/redact-space-system/redact-space-system.component';
import { SpaceSystemComponent } from './Components/space-system/space-system.component';


import { ISpaceSystem } from './Models/Interface/ISpaceSystem';
import { CreateSpaceObjectService } from './Services/create-space-object.service';
import { CreateSpaceSystemService } from './Services/create-space-system.service';
import { ModalService } from './Services/modal.service';
import { RedactSystemService } from './Services/redact-system.service';

import { SapceSystemService } from './Services/SpaceSystemService/sapce-system.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Space';
  inputSearch= "";
  systems$:Observable<ISpaceSystem[]>;
 
  constructor(
    public modalService:ModalService,
    private systemService: SapceSystemService,
    public createSpaceSystemSerice:CreateSpaceSystemService,
    public createSpaceObjectService:CreateSpaceObjectService,
    public redactSpaceSystemService:RedactSystemService
   

    ){}

  ngOnInit(): void{
   this.systems$ = this.systemService.GetAll();
  }
 
 
 
}
