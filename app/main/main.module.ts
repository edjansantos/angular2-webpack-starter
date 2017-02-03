import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent }  from './components/main.component';
import { FullListComponent }  from './components/full-list.component';

const appRoutes: Routes = [
  { path: 'full-list',    component: FullListComponent }
];

@NgModule({
  imports:      [ BrowserModule, RouterModule.forRoot(appRoutes) ],
  declarations: [ MainComponent, FullListComponent ],
  bootstrap:    [ MainComponent ]
})
export class MainModule { }
