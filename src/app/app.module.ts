import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {firebaseConfig} from '../environments/firebaseConfig';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {MatRadioModule} from '@angular/material/radio';
import {HomeModule} from './home/home.module';
import {LoginComponent} from './login/login.component';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { RobotChatComponent } from './robot-chat/robot-chat.component';
import {MatButtonModule} from '@angular/material/button';
import { RobotLogComponent } from './robot-log/robot-log.component';
import {MatDividerModule} from '@angular/material/divider';
import {MatSelectModule} from '@angular/material/select';
import {MatExpansionModule} from '@angular/material/expansion';
import {AuthGuard} from './guards/auth.guard';




@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavbarComponent,
    RobotChatComponent,
    RobotLogComponent





  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    MatRadioModule,
    HomeModule,
    MatCardModule,
    MatFormFieldModule,
    MatIconModule,
    ReactiveFormsModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
    FormsModule,
    MatDividerModule,
    MatSelectModule,
    MatExpansionModule,


  ],
  providers: [AuthGuard],
  exports: [
    RobotChatComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
