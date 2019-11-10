import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [AboutComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: AboutComponent }])
  ]
})
export class AboutModule { }
