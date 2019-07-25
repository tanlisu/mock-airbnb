import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from  '../models/listing';
import { ListingService } from  '../services/listing.service';

@Component({
  selector: 'app-listings',
  templateUrl: './listings.page.html',
  styleUrls: ['./listings.page.scss'],
})
export class ListingsPage implements OnInit {
  listings: Listing[] = [];

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService)
  { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    this.listingService.getListings(this.getListings);
  }

  createNewListing() {
    this.navCtrl.navigateForward("new-listing");
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToListingDetails(listing: Listing) {
    this.listingService.setCurrentListing(listing);
    this.navCtrl.navigateForward("listing-details");
  }

  getListings = (listings) => {
    this.listings = listings;
    console.log("listings in callback function");
    console.log(this.listings);
  };

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