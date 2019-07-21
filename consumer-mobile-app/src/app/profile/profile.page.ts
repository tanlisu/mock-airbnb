import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { UserService } from  '../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private userService: UserService) {
  }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  getName() {
    return this.userService.getName();
  }

  getSurname() {
    return this.userService.getSurname();
  }

  getEmail() {
    return this.userService.getEmail();
  }

}
