

import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PeopleComponent } from './people/people.component';

export const routes: Routes = [
  { path: 'admin', component:  PeopleComponent},
];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes);