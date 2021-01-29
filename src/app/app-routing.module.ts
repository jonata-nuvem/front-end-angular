import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClientesComponent } from './clientes/clientes.component';
import { ClienteNovoComponent } from './cliente-novo/cliente-novo.component';

const routes: Routes = [
{ path: 'clientes', component: ClientesComponent },
{ path: 'novoCliente', component: ClienteNovoComponent }

];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
