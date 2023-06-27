import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { NavigationExtras, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { BdserviceService } from 'src/app/services/bdservice.service';

@Component({
  selector: 'app-categoriac',
  templateUrl: './categoriac.page.html',
  styleUrls: ['./categoriac.page.scss'],
})
export class CategoriacPage implements OnInit {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
    
  nchrchtn: any = [];

  nachrichtenArreglo: any = [
    {
      notcIdent: '',
      notcTitulo: '',
      notcCategoria: '',
      notcContenido: ''
    }

  ]

  constructor(
    private router: Router,
    private http: HttpClient,
    private servicioBD: BdserviceService
) { }

  ngOnInit() {
    this.getNachrichten().subscribe(res=>{
      console.log("Res",res)
      this.nchrchtn = res;
    });

    this.servicioBD.dbState().subscribe(res => {
      if (res) {
        this.servicioBD.nachrichtenFetch().subscribe(item => {
          this.nachrichtenArreglo = item;
        })
      }
    });
  
  }

  obtenerTexto($event: any) {
    const valor = $event.target.value;
    console.log("Texto escrito: " + valor);
  }

  modificar(x: any) {
    let navigationExtras: NavigationExtras = {
      state: {
        notcIdentEnvio: x.notcIdent,
        notcTituloEnvio: x.notcTitulo,
        notcCategoriaEnvio: x.notcCategoria,
        notcContenidoEnvio: x.notcContenido
      }
    }

    this.router.navigate(['/modificar'], navigationExtras);

  }
  eliminar(x: any) { 
    this.servicioBD.nachrichtEliminacion(x.notcIdent);
    this.servicioBD.presentToast("Noticia Eliminada");

  }

  getNachrichten(){
    return this.http
    .get("assets/files/nachrichten.json")
    .pipe(
      map((res:any) =>{
        return res.C;
      })
    )
  }

}
