import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpendyModule } from './spendy/spendy.module';

//MDB Bootstrap Modules 
import { MdbCollapseModule } from 'mdb-angular-ui-kit/collapse';
import { MdbValidationModule } from 'mdb-angular-ui-kit/validation';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MdbRadioModule } from 'mdb-angular-ui-kit/radio';





@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SpendyModule,
    MdbCollapseModule,
    MdbValidationModule,
    ReactiveFormsModule,
    SpendyModule,
    FormsModule,
    MdbFormsModule,
    NoopAnimationsModule,
    MdbRadioModule
 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
