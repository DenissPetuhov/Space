import { Component } from '@angular/core';
import { SpaceSystemModel,responeSpaceSystem, SpaceSystemClass } from './Models/SpaceSystemModel';
import { SpaceService } from './Services/space-system-model.service';
import { responeSpaceObject, SpaceObjectClass, SpaceObjectModel } from './Models/SpaceObjectModel';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SpaceUI';
  systems: SpaceSystemModel[]=[];
  objects: SpaceObjectModel[]=[];
  systemToEdit?: SpaceSystemModel;
  objectToEdit?:SpaceObjectModel;
  constructor(private spaceService: SpaceService){}
  ngOnInit(): void{

   this.spaceService.GetSpaceSystem().subscribe((result:responeSpaceSystem)=>{this.systems=result.responseData});

   this.spaceService.GetSpaceObject().subscribe((result:responeSpaceObject)=>{this.objects=result.responseData});
 
  }
  getSystemObject(system: SpaceSystemModel){
   this.spaceService.GetSpaceObjectsBySpaceSystemId(system).subscribe((result:responeSpaceObject)=>{this.objects=result.responseData});
  }
  updateSpaceList(systems: SpaceSystemModel[]){
    this.systems = systems;
  }
  initNewSystem(){
    this.systemToEdit = new SpaceSystemClass();
  }
  editSystem(system: SpaceSystemModel){
    this.systemToEdit = system;
  }
  
  UpdateSpaceObjectList(objects: SpaceObjectModel[]){
  this.objects = objects;
  }
  initNewObject(){
    this.objectToEdit =new SpaceObjectClass();
    }
    
    editObject(object: SpaceObjectModel){
      this.objectToEdit= object
    }
  }
