import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HomeComponent } from './components/home/home.component';
import { TrabajosComponent } from './components/trabajos/trabajos.component';

const routes: Routes = [
  {path: "", component: HomeComponent},
  {path: "trabajos", component: TrabajosComponent},
  {path: "contacto", component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
