import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { MyWorkComponent } from './my-work/my-work.component';

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
    path: 'my-work',
    loadChildren: () => import('./my-work/my-work.module').then(mod => mod.MyWorkModule),
    data: { animation: 'my-work'}
  },
  {
    path: 'contact',
    component: ContactComponent,
    data: { animation: 'contact'}
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
