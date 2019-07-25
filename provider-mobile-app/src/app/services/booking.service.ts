import { Injectable } from '@angular/core';
import { UserService } from '../services/user.service';
import { ListingService } from '../services/listing.service';
import { Booking } from  '../models/booking';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  public bookings: Booking[] = [];
  public listingIds: number[] = [];

  constructor(
    private userService: UserService,
    private listingService: ListingService,
    private http: HttpClient
    ) { }

  getBookings(bookingCallback: Function) {
    this.setBookingsFromDB(bookingCallback);
  }

  // gets the bookings by this host from the database and stores them
  setBookingsFromDB(bookingCallback: Function) {
    var hostId = this.userService.getId();
    this.http.get('http://localhost:5000/listings/'+hostId).subscribe((response) => {
      for (let listing of Object.values(response)) {
        this.listingIds.push(listing.id);
      }

      this.bookings = [];
      console.log(this.listingIds);
      this.listingIds.forEach( (listingId) => {
        this.getPendingBookings(listingId);
      });
      bookingCallback(this.bookings);
    });
  }

  getPendingBookings(listingId: number) {
    this.http.get('http://localhost:5000/bookings/listing/'+listingId+'/pending').subscribe((response) => {
      console.log(response);
      for (let booking of Object.values(response)) {
        let newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
        newBooking.setId(booking.id);
        newBooking.setListingId(booking.listingId);
        newBooking.setGuestId(booking.guestId);
        this.bookings.push(newBooking);
      }

      this.getAcceptedBookings(listingId);
    });
  }

  getAcceptedBookings(listingId: number) {
    this.http.get('http://localhost:5000/bookings/listing/'+listingId+'/accepted').subscribe((response) => {
      console.log(response);
      for (let booking of Object.values(response)) {
        let newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
        newBooking.setId(booking.id);
        newBooking.setListingId(booking.listingId);
        newBooking.setGuestId(booking.guestId);
        this.bookings.push(newBooking);
      }

      this.getRejectedBookings(listingId);
    });
  }

  getRejectedBookings(listingId: number) {
    this.http.get('http://localhost:5000/bookings/listing/'+listingId+'/rejected').subscribe((response) => {
      console.log(response);
      for (let booking of Object.values(response)) {
        let newBooking = new Booking(booking.status, booking.dateStart, booking.dateEnd);
        newBooking.setId(booking.id);
        newBooking.setListingId(booking.listingId);
        newBooking.setGuestId(booking.guestId);
        this.bookings.push(newBooking);
      }

      console.log(this.bookings);
    });
  }

  updateBooking(bookingInfo, status: string) {
    let newBooking = new Booking(status, bookingInfo.dateStart, bookingInfo.dateEnd);
    this.bookings = this.bookings.filter(x => {x.getId() != bookingInfo.id});
    this.bookings.push(newBooking);
    return this.http.post('http://localhost:5000/bookings/update', bookingInfo);
  }
}