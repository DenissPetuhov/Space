import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { ISpaceSystem } from 'src/app/Models/Interface/ISpaceSystem';
import { CreateSpaceObjectService } from 'src/app/Services/create-space-object.service';
import { SpaceObjectService } from 'src/app/Services/SpaceObjectService/space-object.service';

@Component({
  selector: 'app-create-spaceobject',
  templateUrl: './create-spaceobject.component.html',
  styleUrls: ['./create-spaceobject.component.scss']
})
export class CreateSpaceobjectComponent implements OnInit {

  constructor( 
    public spaceObjectService:SpaceObjectService,
    public createSpaceObjectService:CreateSpaceObjectService
  ) { }
  form =  new FormGroup({
    name: new FormControl<string>(''),
    age: new FormControl<number|null>(null),
    type:new FormControl<number|null>(null),
    diametr: new FormControl<number|null>(null),
    mass:new FormControl<number|null>(null),
    spceSystem_id:new FormControl<number|null>(null)
  })
  
system:ISpaceSystem;
  ngOnInit(): void {
  }

  submit(){
    this.spaceObjectService.PostSave({

      name:this.form.value.name as string,
      age:this.form.value.age as number,
      type:this.form.value.type as number,
      diameter:this.form.value.diametr as number,
      mass:this.form.value.mass as number,
      spaceSystem_id: this.system.id as number
      
      
    }).subscribe(()=>{this.createSpaceObjectService.closeCreateObjectPanel()})
 
  }
}
