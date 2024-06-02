import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { SabermasComponent } from './sabermas/sabermas.component';
import { ProyectosrecientesComponent } from './proyectosrecientes/proyectosrecientes.component';
import { TrabajarconmigoComponent } from './trabajarconmigo/trabajarconmigo.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    SabermasComponent,
    ProyectosrecientesComponent,
    TrabajarconmigoComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
