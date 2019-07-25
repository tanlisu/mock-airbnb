import { Component, OnInit } from '@angular/core';
import { NavController, AlertController } from '@ionic/angular';
import { ListingService } from  '../services/listing.service';
import { UserService } from '../services/user.service';


@Component({
  selector: 'app-update-listing',
  templateUrl: './update-listing.page.html',
  styleUrls: ['./update-listing.page.scss'],
})
export class UpdateListingPage implements OnInit {
  public title: string;
  public location: string;
  public numberOfPeople: string;
  public pricePerNight: string;
  public description: string;

  constructor(
    private navCtrl: NavController,
    private listingService: ListingService,
    private userService: UserService,
    private alertController: AlertController)
  {}

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.title = this.listingService.getTitle();
    this.location = this.listingService.getLocation();
    this.numberOfPeople = this.listingService.getNumberOfPeople();
    this.pricePerNight = this.listingService.getPricePerNight();
    this.description = this.listingService.getDescription();
  }

  logout() {
    this.navCtrl.navigateForward("login");
  }

  navToListingDetails() {
    this.navCtrl.navigateForward("listing-details");
  }

  async presentAlert() {  
    const alert = await this.alertController.create({
      message: 'Updated listing.',
      buttons: [{
        text: 'OK',
        handler: () => {
          this.navCtrl.navigateForward("tabs/tabs/listings");
        }
      }]
    });
    return await alert.present();
  }

  updateListing() {
    let listingInfo = {
      id: this.listingService.getCurrentListing().getId(),
      title: this.title,
      location: this.location,
      numberOfPeople: this.numberOfPeople,
      pricePerNight: this.pricePerNight,
      description: this.description,
      hostId: this.userService.getId()
    };
    this.listingService.updateListing(listingInfo).subscribe((response) => {
      this.presentAlert();
    });
  }

}
