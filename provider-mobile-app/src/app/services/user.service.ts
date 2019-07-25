import { Injectable } from '@angular/core';
import { User } from  '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: User;

  constructor() { }

  setCurrentUserId(id: number) {
    this.currentUser.setId(id);
  }

  setCurrentUser(name, surname, email, password) {
    this.currentUser = new User(name, surname, email, password);
  }

  getId() {
    return this.currentUser.getId();
  }

  getName() {
    return this.currentUser.getName();
  }

  getSurname() {
    return this.currentUser.getSurname();
  }

  getEmail() {
    return this.currentUser.getEmail();
  }
}
