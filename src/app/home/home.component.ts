import { Component, OnInit } from '@angular/core';
import {User} from '../_models/index';
import {UserService} from '../_services';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  public user: User;
  public currentUser;
  constructor(private userService: UserService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
  }

  ngOnInit() {
    this.userService.find(this.currentUser.username)
      .subscribe((_user) => {
        this.user = _user;
    });
  }

}
