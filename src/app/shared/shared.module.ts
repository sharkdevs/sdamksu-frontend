import { NgModule } from '@angular/core';
import { BaseButtonComponent } from '../common/base-button/base-button.component';
import { MaterialModule } from '../common/material/material.module';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [  
    BaseButtonComponent
  ],
  imports: [
    CommonModule,  
    MaterialModule
  ],
  exports:[
    BaseButtonComponent, 
    CommonModule,
    MaterialModule
  ]
})
export class SharedModule { }
