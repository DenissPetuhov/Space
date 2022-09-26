import { Component, Input, OnInit } from '@angular/core';

import { ISpaceObject } from 'src/app/Models/Interface/ISpaceObject';
import { SpaceObjectService } from 'src/app/Services/SpaceObjectService/space-object.service';
import { SapceSystemService } from 'src/app/Services/SpaceSystemService/sapce-system.service';

@Component({
  selector: 'app-space-ojbect',
  templateUrl: './space-ojbect.component.html',
  styleUrls: ['./space-ojbect.component.scss']
})
export class SpaceOjbectComponent implements OnInit {

  
  @Input() object : ISpaceObject
  constructor(
    private systemService: SapceSystemService,
    private objectService: SpaceObjectService,
  
    ){}
  ngOnInit(): void {
  }
  deleteSpaceObject(object:ISpaceObject){
    this.objectService.Delete(object);
  }
}
