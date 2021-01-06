import {Component, Input, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {RobotService} from '../../../services/robot.service';
import {AuthUser} from '../../../Models/users/Shared/user';
import {AuthenticationService} from '../../../services/authentication.service';


@Component({
  selector: 'app-robot-card',
  templateUrl: './robot-card.component.html',
  styleUrls: ['./robot-card.component.css']
})
export class RobotCardComponent implements OnInit {
  @Input() robot: AuthUser;
  active: boolean;
  updateRobot: FormGroup;
  public edit: boolean;

  constructor(private router: Router, private formBuilder: FormBuilder, private robotService: RobotService, private userService: AuthenticationService) {
    this.active = false;
    this.edit = false;
  }

  ngOnInit(): void {
    this.updateRobot = new FormGroup({
      uid: new FormControl(this.robot.uid),
      name: new FormControl(this.robot.name, Validators.required),
      email: new FormControl(this.robot.email, Validators.required),
      role: new FormControl(this.robot.role)
    });
  }

  // tslint:disable-next-line:typedef
  public switchActivation() {
    this.active = !this.active;
  }

  // tslint:disable-next-line:typedef
  onEdit() {
    this.edit = true;
  }

  // tslint:disable-next-line:typedef
  submitHandler(){
    if (this.updateRobot.valid){
      const update = this.updateRobot.value;
      this.userService.UpdateUserInfo(update);
    }
  }

  // tslint:disable-next-line:typedef
  deleteRobot(robot: AuthUser){
    this.robotService.deleteRobot(robot);
  }

  // tslint:disable-next-line:typedef
  public onCancel() {
    this.edit = false;
    this.updateRobot.patchValue({uid: this.robot.uid});
    this.updateRobot.patchValue({name: this.robot.name});
    this.updateRobot.patchValue({email: this.robot.email});
    this.updateRobot.patchValue({role: this.robot.role});
  }


  // tslint:disable-next-line:typedef
  get name() {
    return this.updateRobot.get('name') as FormControl;
  }

  // tslint:disable-next-line:typedef
  get email() {
    return this.updateRobot.get('email') as FormControl;
  }
}
