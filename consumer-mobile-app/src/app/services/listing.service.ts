import { Injectable } from '@angular/core';
import { Listing } from  '../models/listing';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public currentListing: Listing;
  public listings: Listing[] = [];

  constructor(private http: HttpClient) { }

  setCurrentListing(listing: Listing) {
    this.currentListing = listing;
  }

  // returns an array of all listings in the database
  getListings() {
    this.setListingsFromDB();
    return this.listings;
  }

  // gets the listings from the database and stores them
  setListingsFromDB() {
    this.http.get('http://localhost:5000/listings').subscribe((response) => {
      console.log(response);
      for (let listing of Object.values(response)) {
        let newListing = new Listing(listing.title, listing.location, listing.description, listing.numberOfPeople, listing.pricePerNight);
        newListing.setId(listing.id);
        newListing.setHostId(listing.hostId);
        this.listings.push(newListing);
      }
    });
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