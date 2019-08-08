import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FacturaComponent } from './layout/factura/factura.component';
import { InicioComponent } from './layout/inicio/inicio.component';
import { RegistroPersonaComponent } from './layout/registro-persona/registro-persona.component';
import { RegistroProductoComponent } from './layout/registro-producto/registro-producto.component';
const routes: Routes = [
  { path: 'factura', component: FacturaComponent },
  { path: 'cl', component: FacturaComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'registro', component: RegistroPersonaComponent },
  { path: 'registro-producto', component: RegistroProductoComponent },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
