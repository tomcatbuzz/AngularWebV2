import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyWorkComponent } from './my-work.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [MyWorkComponent],
  imports: [
    CommonModule,
    MaterialModule,
    RouterModule.forChild([{ path: '', component: MyWorkComponent }])
  ]
})
export class MyWorkModule { }