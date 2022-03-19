import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserContextService {

  private _user: User | any;

  get user(): User {
    return this._user;
  }

  set user(value: User) {
    this._user = value;
  }



}
