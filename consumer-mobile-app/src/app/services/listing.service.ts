import { Injectable } from '@angular/core';
import { Listing } from  '../models/listing';

@Injectable({
  providedIn: 'root'
})
export class ListingService {

  public listings: Listing[];
  private storedIndex: number = 0; // used to keep track of which listing the user is looking at

  constructor() {
    let description = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.";
    let listing1: Listing = new Listing("Cozy Apartment", "Lisbon, Portugal", description, "3", "100");
    let listing2: Listing = new Listing("Modern Studio", "San Francisco, USA", description, "4", "200");
    let listing3: Listing = new Listing("Private Room", "Barcelona, Spain", description, "2", "150");
    this.listings = [listing1, listing2, listing3];
  }

  getListings() {
    return this.listings;
  }

  getStoredIndex() {
    return this.storedIndex;
  }

  setStoredIndex(index: number) {
    this.storedIndex = index;
  }

  getListingIndex(listing: Listing) {
    let i: number;
    for (i=0; i<this.listings.length; i++) {
      // identify listing by its title
      if (listing.getTitle() == this.listings[i].getTitle()) {
        return i;
      }
    }
    return -1; // listing does not exist
  }

  addListing(listing: Listing) {
    this.listings.push(listing);
  }

  deleteListing(listing: Listing) {
    let i: number = this.getListingIndex(listing);
    if (i != -1) {
      this.listings.splice(i);
    }
  }
}