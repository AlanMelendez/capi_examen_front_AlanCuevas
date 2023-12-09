import { Injectable } from '@angular/core';
import { environment } from '../env/enviroment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

   urlApi = environment.apiUrl;
  constructor( private httpClient: HttpClient) { }


  getUsuarios(){
  
    let dominio = this.urlApi+'/usuarios/obtenerUsuarios';

    let httpOptions = {
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
      }
    };

    this.httpClient.get(dominio, httpOptions);

  }
}
