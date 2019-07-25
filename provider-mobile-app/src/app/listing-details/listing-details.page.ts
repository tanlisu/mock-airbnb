import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ListingService } from  '../services/listing.service';
import { Listing } from '../models/listing';

@Component({
  selector: 'app-listing-details',
  templateUrl: './listing-details.page.html',
  styleUrls: ['./listing-details.page.scss'],
})
export class ListingDetailsPage implements OnInit {
  public listing: Listing;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private alertController: AlertController)
  {
    this.listing = this.listingService.getCurrentListing();
  }

  ngOnInit() {
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToListings() {
    this.navCtrl.navigateForward("tabs/tabs/listings");
  }

  updateListing() {
    this.navCtrl.navigateForward("update-listing");
  }

  deleteListing() {
    this.listingService.deleteListing(this.listingService.getCurrentListing().getId()).subscribe((response) => {
      this.presentDeleteAlert();
    });
  }

  async presentDeleteAlert() {  
    const alert = await this.alertController.create({
      message: 'Deleted listing.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward("tabs/tabs/listings");
        }
      }]
    });
    return await alert.present();
  }

}
