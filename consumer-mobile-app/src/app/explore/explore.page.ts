import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from  '../models/listing';
import { ListingService } from  '../services/listing.service';

@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService)
  { }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToListingDetails(listing: Listing) {
    this.listingService.setStoredIndex(this.listingService.getListingIndex(listing));
    this.navCtrl.navigateForward("listing-details");
  }

  getListings() {
    return this.listingService.getListings();
  }

}