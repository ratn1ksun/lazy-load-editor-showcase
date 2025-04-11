import { Routes } from '@angular/router';

export const routes: Routes = [

  {
    path: '', loadComponent: ()=> import('../playground/playground.component').then(m => m.PlaygroundComponent),
  }


];
