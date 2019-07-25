import { Injectable } from '@angular/core';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users: Array<User>;

  constructor() {
    this.users = [];
  }

  getUsers(): Array<User> {
    return this.users;
  }

  addUser(user: User) {
    this.users.push(user);
  }

}
