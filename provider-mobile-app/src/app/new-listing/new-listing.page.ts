import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Listing } from  '../models/listing';
import { ListingService } from '../services/listing.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-new-listing',
  templateUrl: './new-listing.page.html',
  styleUrls: ['./new-listing.page.scss'],
})
export class NewListingPage implements OnInit {
  public title: string;
  public location: string;
  public numberOfPeople: string;
  public pricePerNight: string;
  public description: string;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private userService: UserService
  ) {}

  ngOnInit() {
  }

  navToListings() {
    this.navCtrl.navigateForward("tabs/tabs/listings");
  }

  createListing() {
    let listingInfo = {
      title: this.title,
      location: this.location,
      numberOfPeople: this.numberOfPeople,
      pricePerNight: this.pricePerNight,
      description: this.description,
      hostId: this.userService.getId()
    };
    this.listingService.addListing(listingInfo).subscribe((response) => {
      this.navCtrl.navigateForward("tabs/tabs/listings");
    });
  }
}