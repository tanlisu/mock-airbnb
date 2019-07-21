import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AlertController } from '@ionic/angular';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private alertController: AlertController,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
  }

  createBooking() {
    
  }

  navToListingDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

}
