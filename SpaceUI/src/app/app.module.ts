import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditSpaceSystemComponent } from './Components/edit-space-system/edit-space-system.component';
import { FormsModule } from '@angular/forms';
import { EditSpaceObjectComponent } from './Components/edit-space-object/edit-space-object.component';


@NgModule({
  declarations: [
    AppComponent,
    EditSpaceSystemComponent,
    EditSpaceObjectComponent,

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
