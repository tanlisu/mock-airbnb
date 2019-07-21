import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService, ResponseObject } from '../services/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})

export class RegistrationPage implements OnInit {
  public name: string;
  public surname: string;
  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit() {
  }

  register() {
    // make sure the user enters all required fields
    if ((this.name != undefined) && (this.surname != undefined) && (this.email != undefined) && (this.password != undefined)) {
      this.authenticationService.register(this.name, this.surname, this.email, this.password).subscribe((response: ResponseObject) => {
        console.log(response);
        if (response.success) {
          this.authenticationService.setToken(response.data);
          this.navCtrl.navigateForward("tabs/tabs/explore");
        }
        else {
          this.presentAlert();
        }
      });
    }
  }

  backToLogin() {
    this.navCtrl.navigateForward("login");
  }

  async presentAlert() {  
    const alert = await this.alertController.create({
      message: 'Email is already in use. Please choose another one.',
      buttons: ['OK']
    });
    return await alert.present();
  }
}