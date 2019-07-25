import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.page.html',
  styleUrls: ['./inbox.page.scss'],
})
export class InboxPage implements OnInit {

  constructor(private navCtrl: NavController,) { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

}
