import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {RobotService} from '../services/robot.service';
import {Observable} from 'rxjs';
import {AuthUser} from '../Models/users/Shared/user';
import {roles} from '../../environments/environment';

@Component({
  selector: 'app-robots',
  templateUrl: './robots.component.html',
  styleUrls: ['./robots.component.css']
})
export class RobotsComponent implements OnInit {

  isAddComponentActive: boolean;
  robots$: Observable<AuthUser[]>;
  constructor(public router: Router, private robotService: RobotService) {
    this.isAddComponentActive = false;
  }

  ngOnInit(): void {
    this.robots$ = this.robotService.getAllRobots();

  }


  // tslint:disable-next-line:typedef
  public createNew() {
    this.isAddComponentActive = true;

  }

  // tslint:disable-next-line:typedef
  public onCancel() {
    this.isAddComponentActive = false;
  }

}
