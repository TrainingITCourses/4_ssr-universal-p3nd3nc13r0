import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BuscadorComponent } from './buscador.component';

const routes: Routes = [
  { path: 'buscador', component: BuscadorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
