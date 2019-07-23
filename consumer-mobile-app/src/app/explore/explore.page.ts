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
  listings: Listing[] = [];

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService)
  {
    this.listings = this.getListings();
   }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToListingDetails(listing: Listing) {
    this.listingService.setCurrentListing(listing);
    this.navCtrl.navigateForward("listing-details");
  }

  getListings() {
    return this.listingService.getListings();
  }

  getTitle() {
    return this.listingService.getTitle();
  }

  getLocation() {
    return this.listingService.getLocation();
  }

  getDescription() {
    return this.listingService.getDescription();
  }

  getNumberOfPeople() {
    return this.listingService.getNumberOfPeople();
  }

  getPricePerNight() {
    return this.listingService.getPricePerNight();
  }

}