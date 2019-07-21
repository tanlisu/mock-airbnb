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

  private storedIndex: number;
  private listing: Listing;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService)
  {
    this.storedIndex = this.listingService.getStoredIndex();
    this.listing = this.listingService.getListings()[this.storedIndex];
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
    
  }

}
