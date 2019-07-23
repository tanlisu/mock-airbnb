import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { ListingService } from  '../services/listing.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {
  public listing: Listing;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService)
  {
    this.listing = this.listingService.getCurrentListing();
  }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToExplore() {
    this.navCtrl.navigateForward("tabs/tabs/explore");
  }

  book() {
    this.navCtrl.navigateForward("book-now");
  }

}
