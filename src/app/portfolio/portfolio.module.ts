import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { PortfolioComponent } from './portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: '', component: PortfolioComponent }])
  ]
})
export class PortfolioModule { }
