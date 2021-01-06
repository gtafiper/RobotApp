import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RobotsRoutingModule } from './robots-routing.module';
import {RobotsComponent} from './robots.component';
import { AddRobotComponent } from './add-robot/add-robot/add-robot.component';
import { RobotCardComponent } from './robot-card/robot-card/robot-card.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar';


@NgModule({
  declarations: [RobotsComponent, AddRobotComponent, RobotCardComponent],
  exports: [RobotsComponent],
    imports: [
        CommonModule,
        RobotsRoutingModule,
        ReactiveFormsModule,
        MatCardModule,
        MatIconModule,
        MatDividerModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatSnackBarModule
    ]
})
export class RobotsModule { }
