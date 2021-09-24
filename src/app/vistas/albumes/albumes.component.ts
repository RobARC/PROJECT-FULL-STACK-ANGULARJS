import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../servicios/api/api.service';
import { Router } from '@angular/router';

import { ListaalbumesI } from '../../modelos/Listaalbumes.interface'


@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {

    albumes!: ListaalbumesI[];
    

    constructor(private api:ApiService, private router:Router) { }

    ngOnInit(): void {
      this.api.getAllAlbums('').subscribe(data =>{
        this.albumes = data;
    })
  }
}
