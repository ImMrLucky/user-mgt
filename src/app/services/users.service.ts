import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {of, Subject} from 'rxjs';
import {User} from "../user/user.component";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  currentUser: any = new Subject();

  constructor(private http: HttpClient) {
  }

  getUsers() {
    let currentUsers = [
      {
        id: 'u1',
        name: 'Jasmine Washington',
        avatar: 'user-1.jpg',
      },
      {
        id: 'u2',
        name: 'Emily Thompson',
        avatar: 'user-2.jpg',
      },
      {
        id: 'u3',
        name: 'Marcus Johnson',
        avatar: 'user-3.jpg',
      },
      {
        id: 'u4',
        name: 'David Miller',
        avatar: 'user-4.jpg',
      },
      {
        id: 'u5',
        name: 'Priya Patel',
        avatar: 'user-5.jpg',
      },
      {
        id: 'u6',
        name: 'Arjun Singh',
        avatar: 'user-6.jpg',
      },
    ];
    return of(currentUsers);
  }

  getCurrentUser() {
    return this.currentUser;
  }

  setCurrentUser(user: User) {
    this.currentUser = user;
    console.log('current user', this.currentUser);
  }
}
