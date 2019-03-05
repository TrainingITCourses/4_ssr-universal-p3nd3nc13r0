import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav>
    <a routerLink="buscador">Lanzamientos</a>
  <nav>
  <router-outlet></router-outlet>`
})
export class AppComponent {
  title = 'speed';
}
