import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PeopleComponent } from './people/people.component';
import { AdminComponent } from './admin/admin.component';
import { routing } from './app.routes';
import { OnlynumberDirective } from './directives/onlynumber.directive';

const appRoutes: Routes = [
  { path: 'admin', component: AdminComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    AdminComponent,
    OnlynumberDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
