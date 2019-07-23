import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { Booking } from  '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private currentListingId: number;
  private currentGuestId: number;
  public bookings: Booking[] = [];

  constructor(
    private userService: UserService,
    private listingService: ListingService,
    private http: HttpClient
    ) {
    this.currentListingId = this.listingService.getListingId();
    this.currentGuestId = this.userService.getUserId();
  }

  getCurrentListingId() {
    return this.currentListingId;
  }

  getCurrentGuestId() {
    return this.currentGuestId;
  }

  addBooking(bookingInfo) {
    return this.http.post('http://localhost:5000/bookings/add', bookingInfo);
  }
}
