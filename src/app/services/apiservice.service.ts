import { Injectable } from '@angular/core';
import { environment } from '../env/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from '../models/User';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

   urlApi = environment.apiUrl;
  constructor( private httpClient: HttpClient) { }


  getUsuarios(): Observable<Usuario[]>{
  
    let dominio = this.urlApi+'/usuarios/obtenerUsuarios';

    let httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

    return this.httpClient.get<Usuario[]>(dominio, httpOptions).pipe(
      catchError(err => {
        console.log('Error al obtener usuarios', err);
        return [];
      }
    ));

  }
}
