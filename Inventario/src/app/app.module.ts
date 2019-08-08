import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FacturaComponent } from './layout/factura/factura.component';
import { RegistroProductoComponent } from './layout/registro-producto/registro-producto.component';
import { RegistroPersonaComponent } from './layout/registro-persona/registro-persona.component';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    NavbarComponent,
    FacturaComponent,
    RegistroProductoComponent,
    RegistroPersonaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
