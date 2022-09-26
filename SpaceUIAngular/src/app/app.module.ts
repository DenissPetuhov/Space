import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SpaceSystemComponent } from './Components/space-system/space-system.component';
import { SpaceOjbectComponent } from './Components/space-ojbect/space-ojbect.component';
import { SerchSystemPipe } from './pipes/serch-system.pipe';

import { CreateSpaceSystemComponent } from './Components/create-space-system/create-space-system.component';
import { ModalComponent } from './Components/modal/modal.component';
import { ModalService } from './Services/modal.service';
import { CreateSpaceobjectComponent } from './Components/create-spaceobject/create-spaceobject.component';
import { RedactSpaceSystemComponent } from './Components/redact-space-system/redact-space-system.component';


@NgModule({
  declarations: [
    AppComponent,
    SpaceSystemComponent,
    SpaceOjbectComponent,
    SerchSystemPipe,
    ModalComponent,
    CreateSpaceSystemComponent,
    CreateSpaceobjectComponent,
    RedactSpaceSystemComponent
    
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [ ],
  bootstrap: [AppComponent]

   
  

  
})
export class AppModule { }
