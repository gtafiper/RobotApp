import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../services/authentication.service';
import {LoginComponent} from '../login/login.component';
import {AuthUser} from '../Models/users/Shared/user';
import {roles} from '../../environments/environment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: AuthUser;
  isHuman: boolean;

  constructor(private router: Router, public auth: AuthenticationService) { }

  Login(): void{
    this.router.navigate(['./login']);
  }

  ngOnInit(): void {
    const sub = this.auth.authUser$.subscribe(value => {
      this.user = value;

      if (this.user.role === roles.human){
        this.isHuman = true;
      }
  });
  }



}
