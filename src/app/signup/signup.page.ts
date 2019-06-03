import { Component, ViewChild } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router, Route } from '@angular/router';
import { ToastController, LoadingController } from '@ionic/angular';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: 'signup.page.html',
  styleUrls: ['signup.page.scss'],
})
export class SignupPage {
  @ViewChild('signupform') signupform: NgForm;
  public user: any = {};
  public loader: any;
  constructor(public angularFireAuth: AngularFireAuth, public router: Router,
    public toastController: ToastController,
    public loadingController: LoadingController) { }
  signup() {
    this.presentLoading();
    this.angularFireAuth.auth.createUserWithEmailAndPassword(
      this.user.email,
      this.user.password
    ).then(res => {
      this.router.navigate(['login']);
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
