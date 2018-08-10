import { Component, OnInit } from '@angular/core';
import {AuthService} from '../services/auth.service';
import {User} from '../models/user';
import {FormControl, FormGroup} from '@angular/forms';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  User: User;
  formdata: FormGroup;
  constructor(public authService: AuthService,   private router: Router) {}

  ngOnInit() {
    this.formdata = new FormGroup({
      email: new FormControl('email@gmail.com'),
      password: new FormControl('password')
    });
    this.authService.user.subscribe(user => {
      if (!!user) {
        this.router.navigate(['/home']);
      }
    });
  }
  login(user: User) {
    this.User = user;
    this.authService.login(this.User.email, this.User.password).then(value => {
      console.log('Success!', value);
      this.router.navigate(['/home']);
    })
    .catch(err => {
      console.log('Something went wrong:',err.message);
    });
    this.User = new User();
  }
  logout() {
    this.authService.logout();
  }

}
