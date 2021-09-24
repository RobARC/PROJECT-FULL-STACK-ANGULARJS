import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { ListausuariosI } from '../../modelos/listasusuarios.interface'

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

  usuarios!: ListausuariosI[];
   
  constructor(private api:ApiService, private router:Router) { }

  ngOnInit(): void {
    this.api.getAllUsers('').subscribe(data =>{
      this.usuarios = data;
      
    })
  }

}
