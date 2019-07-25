import { Injectable } from '@angular/core';
import { ServiceProvider } from '../models/service-provider';

@Injectable({
  providedIn: 'root'
})
export class ServiceProviderService {

  serviceProviders: Array<ServiceProvider>;

  constructor() {
    this.serviceProviders = [];
  }

  getServiceProviders(): Array<ServiceProvider> {
    return this.serviceProviders;
  }

  addServiceProvider(serviceProvider: ServiceProvider) {
    this.serviceProviders.push(serviceProvider);
  }

}
