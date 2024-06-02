import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SabermasComponent } from './sabermas/sabermas.component';
import { ProyectosrecientesComponent } from './proyectosrecientes/proyectosrecientes.component';
import { TrabajarconmigoComponent } from './trabajarconmigo/trabajarconmigo.component';
import { ContactoComponent } from './contacto/contacto.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sabermas', component: SabermasComponent },
  { path: 'proyectorecientes', component: ProyectosrecientesComponent },
  { path: 'trabajarconmigo', component: TrabajarconmigoComponent },
  { path: 'contacto', component: ContactoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }