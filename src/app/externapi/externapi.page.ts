import { Component, OnInit } from '@angular/core';
import { ItemReorderEventDetail } from '@ionic/angular';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ApiserviceService } from '../services/apiservice.service';

@Component({
  selector: 'app-externapi',
  templateUrl: './externapi.page.html',
  styleUrls: ['./externapi.page.scss'],
})
export class ExternapiPage implements OnInit {
  handleReorder(ev: CustomEvent<ItemReorderEventDetail>) {
    // The `from` and `to` properties contain the index of the item
    // when the drag started and ended, respectively
    console.log('Dragged from index', ev.detail.from, 'to', ev.detail.to);

    // Finish the reorder and position the item in the DOM based on
    // where the gesture ended. This method can also be called directly
    // by the reorder group
    ev.detail.complete();
  }
  posteos: any = [];
  constructor(
    private api: ApiserviceService,
    private router: Router,
    private http: HttpClient) { }

  ngOnInit() {
  }

  getPosteos(){
    this.api.getPosteos().subscribe((data)=>{
      this.posteos=data;
    });
  }

  ionViewWillEnter(){
    this.getPosteos();
  }
}
