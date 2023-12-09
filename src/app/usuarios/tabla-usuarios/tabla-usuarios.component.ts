import { Component } from '@angular/core';
import { catchError, pipe } from 'rxjs';
import { Usuario } from 'src/app/models/User';
import { ApiserviceService } from 'src/app/services/apiservice.service';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']})

export class TablaUsuariosComponent {

  constructor(private api: ApiserviceService) { }

  public titleTabla = 'Tabla de usuarios';
  public usuarios!: Usuario[];
  ngOnInit() {
    this.obtenerUsuarios();
    
  }

  obtenerUsuarios(){
    this.api.getUsuarios()
    .subscribe(
      (data: Usuario[]) => {
        this.usuarios = data;
        console.log(this.usuarios);
      }
    );
  }
}
