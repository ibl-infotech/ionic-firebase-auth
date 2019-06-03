import { Component } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public angularFireAuth: AngularFireAuth,
    public router: Router) { }
  Logout() {
    this.angularFireAuth.auth.signOut();
    this.router.navigate(['login'])
  }
}
