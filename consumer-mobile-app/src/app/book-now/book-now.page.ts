import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from '../services/listing.service';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-book-now',
  templateUrl: './book-now.page.html',
  styleUrls: ['./book-now.page.scss'],
})
export class BookNowPage implements OnInit {

  public dateStart: string;
  public dateEnd: string;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
  }

  getListingTitle() {
    return this.listingService.getTitle();
  }

  createBooking() {
    let bookingInfo = {
      listingId: this.bookingService.getCurrentListingId(),
      guestId: this.bookingService.getCurrentGuestId(),
      status: 'pending',
      dateStart: this.dateStart,
      dateEnd: this.dateEnd
    };
    this.bookingService.addBooking(bookingInfo).subscribe((response) => {
      console.log(bookingInfo);
      console.log(response);
      // currently does not tell user whether the booking is successful or not
      this.navCtrl.navigateForward("tabs/tabs/explore");
    });
  }

  navToListingDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

}
