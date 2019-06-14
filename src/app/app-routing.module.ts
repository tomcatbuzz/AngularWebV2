import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SelectivePreloadStrategyService } from './services/selective-preload-strategy.service';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule),
    data: { animation: 'home'}
  },
  {
    path: 'about',
    loadChildren: () => import('./about/about.module').then(mod => mod.AboutModule),
    data: { animation: 'about'}
  },
  {
    path: 'portfolio',
    loadChildren: () => import('./portfolio/portfolio.module').then(mod => mod.PortfolioModule),
    data: { animation: 'portfolio'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: SelectivePreloadStrategyService })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
