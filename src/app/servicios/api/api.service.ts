import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListausuariosI } from '../../modelos/listasusuarios.interface';
import { ListaalbumesI } from '../../modelos/Listaalbumes.interface';
import { ListapostI } from '../../modelos/Listapost.interface';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  url:string = "https://jsonplaceholder.typicode.com"

  constructor(private http:HttpClient) { }


  getAllUsers(name:string=''):Observable<ListausuariosI[]>{
    let direccion = this.url + '/users';

    return this.http.get<ListausuariosI[]>(direccion);
  }
  getAllAlbums(name:string=''):Observable<ListaalbumesI[]>{
    let direccion = this.url + '/albums';

    return this.http.get<ListaalbumesI[]>(direccion);
  }
  getAllPost(name:string=''):Observable<ListapostI[]>{
    let direccion = this.url + '/posts';

    return this.http.get<ListapostI[]>(direccion);
  }


}
