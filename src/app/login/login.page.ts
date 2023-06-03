import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

nombre: string = "";

  constructor( private router: Router ) { }

  ngOnInit() { }

  ingresar() {
    let navigationExtras: NavigationExtras = { state: { user: this.nombre } };
    this.router.navigate(['./home'], navigationExtras); }

}
