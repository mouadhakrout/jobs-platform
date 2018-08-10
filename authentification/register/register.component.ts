import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  User: User
  constructor(public authService: AuthService) {}

  ngOnInit() {
  }
  signup() {
    this.authService.signup(this.User.email, this.User.password);
    this.User = new User();
  }
}
