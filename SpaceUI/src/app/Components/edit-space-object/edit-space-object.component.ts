import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { responeSpaceObject, SpaceObjectModel } from 'src/app/Models/SpaceObjectModel';

import { SpaceService } from 'src/app/Services/space-system-model.service';

@Component({
  selector: 'app-edit-space-object',
  templateUrl: './edit-space-object.component.html',
  styleUrls: ['./edit-space-object.component.css']
})
export class EditSpaceObjectComponent implements OnInit {
  @Input() object?: SpaceObjectModel;
  @Output() SpaceUpdate = new EventEmitter<responeSpaceObject>();
  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
  }
  updateObject(object:SpaceObjectModel){
    this.spaceService.UpadateSpaceObject(object).subscribe((object)=> this.SpaceUpdate.emit(object));
  }
  deleteObject(object:SpaceObjectModel){
    this.spaceService.DeleteSpaceObject(object).subscribe((object)=> this.SpaceUpdate.emit(object));
  }
  createObject(object:SpaceObjectModel){
    this.spaceService.CreateSpaceObject(object).subscribe((object)=> this.SpaceUpdate.emit(object));
  }
}
