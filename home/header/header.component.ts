import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../authentification/models/user';
import {AuthService} from '../../authentification/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input()
  user: User;
  constructor(public authService: AuthService, public router: Router) { }

  ngOnInit() {
  }
  logOut() {
    this.authService.logout().then(result => this.router.navigate(['/login']));
  }
}
