import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-redact-space-system',
  templateUrl: './redact-space-system.component.html',
  styleUrls: ['./redact-space-system.component.scss']
})
export class RedactSpaceSystemComponent implements OnInit {

  constructor() { }

  form =  new FormGroup({
    name: new FormControl<string>(''),
    age: new FormControl<number|null>(null)
    
  })
  
  ngOnInit(): void {
  }
  submit(){
    
  }
}
