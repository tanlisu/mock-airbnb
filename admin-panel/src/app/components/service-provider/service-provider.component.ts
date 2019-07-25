import { Component, OnInit } from '@angular/core';
import { ServiceProvider } from '../../models/service-provider';
import { ServiceProviderService } from '../../services/service-provider.service';

@Component({
  selector: 'app-service-provider',
  templateUrl: './service-provider.component.html',
  styleUrls: ['./service-provider.component.scss']
})
export class ServiceProviderComponent implements OnInit {

  displayForm: boolean = false;

  firstName: string;
  lastName: string;
  email: string;
  cellPhone: string;
  numberOfListings: string;

  constructor(private serviceProviderService: ServiceProviderService) {
  }

  ngOnInit() {
  }
  
  toggleDisplayForm() {
    this.displayForm = !this.displayForm;
  }

  addNewServiceProvider() {
    let serviceProvider = new ServiceProvider();

    serviceProvider.setInfo(this.firstName, this.lastName, this.email, this.cellPhone, this.numberOfListings);
    this.serviceProviderService.addServiceProvider(serviceProvider);
    this.toggleDisplayForm();
  }

}