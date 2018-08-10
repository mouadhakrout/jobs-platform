import { Component, OnInit } from '@angular/core';
import {AuthService} from '../authentification/services/auth.service';
import {Router} from '@angular/router';
import {User} from '../authentification/models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User
  constructor(public authService: AuthService, public router: Router) {
  }
  ngOnInit() {
    this.authService.user.subscribe(user => {
      if (user === null) {
        this.router.navigate(['/login']);
      } else {
        this.user = user
      }
    });
  }
}
