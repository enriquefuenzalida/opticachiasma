import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/bdservice.service';

@Component({
  selector: 'app-generar',
  templateUrl: './generar.page.html',
  styleUrls: ['./generar.page.scss'],
})
export class GenerarPage implements OnInit {
  notcIdent = "";
  notcTitulo = "";
  notcCategoria = "";
  notcContenido = "";

  constructor( public router:Router, private db: BdserviceService, private location: Location) { }

  insertar(){
    this.db.nachrichtInserción(this.notcTitulo,this.notcCategoria,this.notcContenido);
    this.db.presentToast("Noticia Agregada");
  }
  myBackButton(){
    this.location.back();
  }

  ngOnInit() {
  }
}
