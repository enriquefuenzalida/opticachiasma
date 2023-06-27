import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-categoriaa',
  templateUrl: './categoriaa.page.html',
  styleUrls: ['./categoriaa.page.scss'],
})
export class CategoriaaPage implements OnInit {
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

  constructor(
    private router: Router,
    private http: HttpClient
) { }

  ngOnInit() {

    this.getNachrichten().subscribe(res=>{
      console.log("Res",res)
      this.nchrchtn = res;
    });

  }


  getNachrichten(){
    return this.http
    .get("assets/files/nachrichten.json")
    .pipe(
      map((res:any) =>{
        return res.A;
      })
    )
  }



}

export class ExampleComponent {

}



