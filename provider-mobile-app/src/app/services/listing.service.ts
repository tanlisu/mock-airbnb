import { Injectable } from '@angular/core';
import { Listing } from  '../models/listing';
import { UserService } from '../services/user.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public currentListing: Listing;
  public listings: Listing[] = [];

  constructor(
    private http: HttpClient,
    private userService: UserService
  ) { }

  setCurrentListing(listing: Listing) {
    this.currentListing = listing;
  }

  getListings(listingCallback: Function) {
    this.setListingsFromDB(listingCallback);
  }

  // gets the listings by this host from the database and stores them
  setListingsFromDB(listingCallback: Function) {
    var hostId = this.userService.getId();
    this.listings = [];
    this.http.get('http://localhost:5000/listings/'+hostId).subscribe((response) => {
      console.log("after response");
      console.log(response);
      for (let listing of Object.values(response)) {
        let newListing = new Listing(listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight);
        newListing.setId(listing.id);
        newListing.setHostId(listing.hostId);
        this.listings.push(newListing);
        listingCallback(this.listings);
      }
      console.log("Set Listings from DB");
      console.log(this.listings);
    });
  }

  // post a listing
  addListing(listingInfo) {
    let newListing = new Listing(listingInfo.title, listingInfo.location, listingInfo.description, listingInfo.numberOfPeople, listingInfo.pricePerNight);
    this.listings.push(newListing);
    return this.http.post('http://localhost:5000/listings/add', listingInfo);
  }

  // update a listing
  updateListing(listingInfo) {
    let newListing = new Listing(listingInfo.title, listingInfo.location, listingInfo.description, listingInfo.numberOfPeople, listingInfo.pricePerNight);
    this.listings = this.listings.filter(x => {x.getId() != listingInfo.id});
    this.listings.push(newListing);
    return this.http.post('http://localhost:5000/listings/update', listingInfo);
  }

  // delete a listing
  deleteListing(listingId: number) {
    this.listings = this.listings.filter(x => {x.getId() != listingId});
    return this.http.delete('http://localhost:5000/listings/delete/'+listingId);
  }

  // functions to get info about the current listing:
  getCurrentListing() {
    return this.currentListing;
  }

  getListingId() {
    return this.currentListing.getId();
  }

  getTitle() {
    return this.currentListing.getTitle();
  }

  getLocation() {
    return this.currentListing.getLocation();
  }

  getDescription() {
    return this.currentListing.getDescription();
  }

  getNumberOfPeople() {
    return this.currentListing.getNumberOfPeople();
  }

  getPricePerNight() {
    return this.currentListing.getPricePerNight();
  }
}