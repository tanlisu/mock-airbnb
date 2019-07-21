import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-saved',
  templateUrl: './saved.page.html',
  styleUrls: ['./saved.page.scss'],
})
export class SavedPage implements OnInit {

  constructor(private navCtrl: NavController) {}

  ngOnInit() {
  }

  navToExplore() {
    this.navCtrl.navigateForward("tabs/tabs/explore");
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }
  
}
