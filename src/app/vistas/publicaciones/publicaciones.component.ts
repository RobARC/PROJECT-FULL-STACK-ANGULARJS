import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';
import { ListapostI } from 'src/app/modelos/Listapost.interface';

@Component({
  selector: 'app-publicaciones',
  templateUrl: './publicaciones.component.html',
  styleUrls: ['./publicaciones.component.css']
})
export class PublicacionesComponent implements OnInit {

    publicaciones!: ListapostI[];

    constructor(private api:ApiService, private router:Router) { }

    ngOnInit(): void {
      this.api.getAllPost('').subscribe(data =>{
        console.log(data);
        
        this.publicaciones = data;
    })

  }
}
