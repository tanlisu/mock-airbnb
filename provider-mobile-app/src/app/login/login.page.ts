import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { AuthenticationService, ResponseObject } from '../services/auth.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  public email: string;
  public password: string;

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private authenticationService: AuthenticationService,
    private userService: UserService,
  ) {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.email = "";
    this.password = "";
  }

  login() {
    this.authenticationService.login(this.email, this.password).subscribe((response: ResponseObject) => {
      console.log(response);
      if (response.success) {
        this.authenticationService.setToken(response.data);
        this.userService.setCurrentUser(response.user[0].name, response.user[0].surname, response.user[0].email, response.user[0].password);
        this.userService.setCurrentUserId(response.user[0].id);
        this.navCtrl.navigateForward("tabs/tabs/listings");
      }
      else {
        this.presentAlert();
      }
    });
  }

  register() {
    this.navCtrl.navigateForward("registration");
  }

  async presentAlert() {  
    const alert = await this.alertController.create({
      message: 'Incorrect email and/or password.',
      buttons: ['OK']
    });
    return await alert.present();
  }
}
