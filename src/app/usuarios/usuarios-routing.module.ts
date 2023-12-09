import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TablaUsuariosComponent } from './tabla-usuarios/tabla-usuarios.component';

const routes: Routes = [
  //creamos la ruta
  {
    path: 'usuarios',
    children: [
      {
        path: 'tablaUsuarios',
        component: TablaUsuariosComponent
      },
     
    ]
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuariosRoutingModule { }
