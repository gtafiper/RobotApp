import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of} from 'rxjs';
import {Router} from '@angular/router';

import {AuthenticationService} from '../services/authentication.service';
import validate = WebAssembly.validate;
import {AuthUser} from '../Models/users/Shared/user';
import {roles} from '../../environments/environment';
import {MatSnackBar} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  user: AuthUser;

  public isWrongPass: Observable<boolean>;

  constructor(
    public auth: AuthenticationService,
    public router: Router,


  ) {
    this.isWrongPass = of(false);
  }


  ngOnInit(): void {

    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    });

    const sub = this.auth.authUser$.subscribe(value => {
      this.user = value;

      return sub;
    });
  }


  signIn() {
    if (this.loginForm.valid) {
      this.auth.signInEmail(this.loginForm.value.email, this.loginForm.value.password)
        .then(() => {

          this.router.navigate(['home']);
          });
        }

  }



}
