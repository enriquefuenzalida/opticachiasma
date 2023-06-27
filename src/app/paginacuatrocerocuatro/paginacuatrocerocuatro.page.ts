import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";
import { BdserviceService } from 'src/app/services/bdservice.service';

@Component({
  selector: 'app-paginacuatrocerocuatro',
  templateUrl: './paginacuatrocerocuatro.page.html',
  styleUrls: ['./paginacuatrocerocuatro.page.scss'],
})
export class PaginacuatrocerocuatroPage implements OnInit {

  constructor( private servicio: BdserviceService, private location: Location) { }

  ngOnInit() {
  }

  myBackButton(){
    this.location.back();
  }
}
