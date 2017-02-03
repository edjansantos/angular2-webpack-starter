import { Component } from '@angular/core';

@Component({
  selector: 'full-list',
  template: `<h1>Yeah {{name}} !!!</h1>`
})
export class FullListComponent  { name = 'Edjan'; }
