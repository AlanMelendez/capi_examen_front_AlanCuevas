import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'tablaUsuarios',
        component: TablaUsuariosComponent
      },
      {
        path: '**',
        redirectTo: 'tablaUsuarios',
      },
      {
        path: '',
        redirectTo: 'tablaUsuarios',
        pathMatch: 'full'
      }
     
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
