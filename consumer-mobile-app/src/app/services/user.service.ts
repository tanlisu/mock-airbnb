import { Injectable } from '@angular/core';
import { User } from  '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public users: User[];
  public currentUser: User;

  constructor() {
    this.users = [];
  }

  setCurrentUser(name, surname, email, password) {
    this.currentUser = new User(name, surname, email, password);
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

  addUser(user: User) {
    this.users.push(user);
  }

  isAUser(user: User) {
    let i: number;
    for (i=0; i<this.users.length; i++) {
      if (user.getEmail() == this.users[i].getEmail() &&
          user.getPassword() == this.users[i].getPassword()) {
        return true;
      }
    }
    return false;
  }

  doesEmailExist(email: string) {
    let i: number;
    for (i=0; i<this.users.length; i++) {
      if (email == this.users[i].getEmail() &&
          email == this.users[i].getPassword()) {
        return true;
      }
    }
    return false;
  }
}
