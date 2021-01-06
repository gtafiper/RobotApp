import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {RobotChatComponent} from './robot-chat/robot-chat.component';
import {RobotLogComponent} from './robot-log/robot-log.component';
import {AuthGuard} from './guards/auth.guard';




const routes: Routes = [

  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(m => m.HomeModule)
  },

  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },

  {
    path: 'robots',
    loadChildren: () => import('./robots/robots.module').then(m => m.RobotsModule),
    canActivateChild: [AuthGuard],
  },

  {
    path: 'chatForRobot',
    component: RobotChatComponent,
    canActivate: [AuthGuard],
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'chatOverview',
    component: RobotLogComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
