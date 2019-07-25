import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { Booking } from  '../models/booking';
import { BookingService } from  '../services/booking.service';

@Component({
  selector: 'app-bookings',
  templateUrl: './bookings.page.html',
  styleUrls: ['./bookings.page.scss'],
})
export class BookingsPage implements OnInit {
  bookings: Booking[] = [];

  constructor(
    private navCtrl: NavController,
    private bookingService: BookingService,
    private alertController: AlertController)
  { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.bookingService.getBookings(this.getBookings);
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  getBookings = (bookings) => {
    this.bookings = bookings;
  };

  accept(booking: Booking) {
    let bookingInfo = {
      id: booking.getId(),
      listingId: booking.getListingId(),
      guestId: booking.getGuestId(),
      status: "accepted",
      dateStart: booking.getDateStart(),
      dateEnd: booking.getDateEnd()
    };
    this.bookingService.updateBooking(bookingInfo, "accepted").subscribe((response) => {
      this.presentAcceptAlert();
    });
  }

  reject(booking: Booking) {
    let bookingInfo = {
      id: booking.getId(),
      listingId: booking.getListingId(),
      guestId: booking.getGuestId(),
      status: "rejected",
      dateStart: booking.getDateStart(),
      dateEnd: booking.getDateEnd()
    };
    this.bookingService.updateBooking(bookingInfo, "rejected").subscribe((response) => {
      this.presentRejectAlert();
    });
  }

  async presentAcceptAlert() {  
    const alert = await this.alertController.create({
      message: 'Accepted booking.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward("tabs/tabs/bookings");
        }
      }]
    });
    return await alert.present();
  }

  async presentRejectAlert() {  
    const alert = await this.alertController.create({
      message: 'Rejected booking.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward("tabs/tabs/bookings");
        }
      }]
    });
    return await alert.present();
  }

}