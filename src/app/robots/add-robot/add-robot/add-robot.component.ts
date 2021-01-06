import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RobotService} from '../../../services/robot.service';
import {AuthUser} from '../../../Models/users/Shared/user';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-robot',
  templateUrl: './add-robot.component.html',
  styleUrls: ['./add-robot.component.css']
})
export class AddRobotComponent implements OnInit {

  @Output() cancel: EventEmitter<Event> = new EventEmitter<Event>();

  form = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),

  });


  // tslint:disable-next-line:max-line-length
  constructor(private router: Router, private formBuilder: FormBuilder, private robotService: RobotService, private snack: MatSnackBar) { }

  ngOnInit(): void {

  }

  // tslint:disable-next-line:typedef
  onCancel() {
    this.cancel.emit();
  }



  // tslint:disable-next-line:typedef
  async submitHandler() {
    if (this.form.valid){
      const email = this.form.value.email;
      const password = this.form.value.password;

      const info = {
        name: this.form.value.name,
      } as AuthUser;

      await this.robotService.addRobtUser(email, password, info);
      this.snack.open('user was created', '', {duration: 600, panelClass: ['success']});
    }
    else {
      this.snack.open('form is not valid', '', {duration: 600, panelClass: ['error']});
    }
    this.onCancel();
    this.form.reset();
  }


  // tslint:disable-next-line:typedef
  get name() {
    return this.form.get('name') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.form.get('email') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get password() {
    return this.form.get('password') as FormControl;
  }




}
