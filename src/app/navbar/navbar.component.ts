import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../services/authentication.service';
import {Router} from '@angular/router';
import {AuthUser} from '../Models/users/Shared/user';
import {roles} from '../../environments/environment';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  user: AuthUser;
  isHuman: boolean;

  constructor(public auth: AuthenticationService, public router: Router) { }

  ngOnInit(): void {
    const sub = this.auth.authUser$.subscribe(value => {
      this.user = value;

    });

  }


  // tslint:disable-next-line:typedef
  signOut() {
    this.auth.signOut().then( () => this.router.navigate(['home']));

  }

}
