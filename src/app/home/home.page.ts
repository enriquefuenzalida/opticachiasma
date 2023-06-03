import { Component } from '@angular/core';
import { ActivatedRoute, Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: string = "";

  constructor(private activateroute: ActivatedRoute, private router: Router) {
    this.activateroute.queryParams.subscribe(params => {
      if(this.router.getCurrentNavigation()?.extras.state) this.data = this.router.getCurrentNavigation()?.extras?.state?.['user']; }); }

}
