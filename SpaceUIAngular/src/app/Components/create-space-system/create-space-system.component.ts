import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';
import { AppComponent } from 'src/app/app.component';
import { ISpaceSystem } from 'src/app/Models/Interface/ISpaceSystem';
import { CreateSpaceSystemService } from 'src/app/Services/create-space-system.service';
import { ModalService } from 'src/app/Services/modal.service';
import { SapceSystemService } from 'src/app/Services/SpaceSystemService/sapce-system.service';


@Component({
  selector: 'app-create-space-system',
  templateUrl: './create-space-system.component.html',
  styleUrls: ['./create-space-system.component.scss']
})
export class CreateSpaceSystemComponent implements OnInit {

 
  form =  new FormGroup({
    name: new FormControl<string>(''),
    age: new FormControl<number|null>(null)
    
  })
  
  constructor(
    private spaceSystemService: SapceSystemService,
    public createSpaceSystemService:CreateSpaceSystemService
   
    ) {
   
   }

  ngOnInit(): void {
  }
  submit(){
   
    this.spaceSystemService.PostSave({
      name:this.form.value.name as string,
      age:this.form.value.age as number
    }).subscribe(()=>{this.createSpaceSystemService.closeCreateSystemPanel()})
 
  }
  
  
  
}
