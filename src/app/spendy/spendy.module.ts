import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpendyComponent } from './spendy/spendy.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';



@NgModule({
  declarations: [
    SpendyComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MdbValidationModule,
    FormsModule,
    MdbFormsModule,
    MdbRadioModule
  ],
  exports: [
    SpendyComponent
  ]
})
export class SpendyModule { }
