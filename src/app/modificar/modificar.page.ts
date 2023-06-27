import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from 'src/app/services/bdservice.service';
import { Location } from "@angular/common";



@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.page.html',
  styleUrls: ['./modificar.page.scss'],
})
export class ModificarPage implements OnInit {
  notcIdent = "";
  notcTitulo = "";
  notcCategoria = "";
  notcContenido = "";

  constructor(private router: Router, private activedRouter: ActivatedRoute, private servicio: BdserviceService, private location: Location) {
    this.activedRouter.queryParams.subscribe(param=>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.notcIdent = this.router.getCurrentNavigation()?.extras?.state?.['notcIdentEnvio'];
        this.notcTitulo = this.router.getCurrentNavigation()?.extras?.state?.['notcTituloEnvio'];
        this.notcCategoria = this.router.getCurrentNavigation()?.extras?.state?.['notcCategoriaEnvio'];
        this.notcContenido = this.router.getCurrentNavigation()?.extras?.state?.['notcContenidoEnvio'];
      }
    })

   }

  ngOnInit() {
  }
  editar(){
    this.servicio.nachrichtModificacion(this.notcTitulo,this.notcCategoria,this.notcContenido,this.notcIdent);
    this.servicio.presentToast("Noticia Modificada");
  }
  myBackButton(){
    this.location.back();
  }
}
