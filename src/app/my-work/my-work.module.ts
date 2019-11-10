import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MyWorkComponent } from './my-work.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [MyWorkComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MyWorkComponent }])
  ]
})
export class MyWorkModule { }
