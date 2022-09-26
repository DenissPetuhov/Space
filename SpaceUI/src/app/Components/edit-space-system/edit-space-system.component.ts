import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SpaceService } from 'src/app/Services/space-system-model.service';
import { responeSpaceSystem, SpaceSystemModel } from 'src/app/Models/SpaceSystemModel';


@Component({
  selector: 'app-edit-space-system',
  templateUrl: './edit-space-system.component.html',
  styleUrls: ['./edit-space-system.component.css']
})
export class EditSpaceSystemComponent implements OnInit {
  @Input() system?: SpaceSystemModel;
  @Output() SpaceUpdate = new EventEmitter<responeSpaceSystem>();

  constructor(private spaceService: SpaceService) { }

  ngOnInit(): void {
  }
  updateSystem(system:SpaceSystemModel){
    this.spaceService.UpadateSpaceSystem(system).subscribe((systems)=> this.SpaceUpdate.emit(systems));
  }
  deleteSystem(system:SpaceSystemModel){
    this.spaceService.DeleteSpaceSystem(system).subscribe((system)=> this.SpaceUpdate.emit(system));
  }
  createSystem(system:SpaceSystemModel){
    this.spaceService.CreateSpaceSystem(system).subscribe((system)=> this.SpaceUpdate.emit(system));
  }
}
