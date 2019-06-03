import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: 'login.page.html',
  styleUrls: ['login.page.scss'],
})
export class LoginPage {
  @ViewChild('loginform') loginform: NgForm;
  public user: any = {};
  public loader: any;
  constructor(public angularFireAuth: AngularFireAuth,
    public router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController) { }
  login() {
    this.presentLoading();
    this.angularFireAuth.auth.signInWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then((res: any) => {
      this.router.navigate(['home']);
      this.user = {};
      this.hideloading();
    }, err => {
      this.hideloading();
      this.presentToast(err.message)
    })
  }
  async presentToast(message) {
    const toast = await this.toastController.create({
      message: message,
      duration: 2000
    });
    toast.present();
  }
  async presentLoading() {
    this.loader = await this.loadingController.create({
      message: 'Please wait',
    });
    await this.loader.present();
  }
  hideloading() {
    this.loader.dismiss();
  }
}
