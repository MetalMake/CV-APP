import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/Authentication.service';
import { NavController } from '@ionic/angular';
import * as moment from 'moment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  public date: any;

  constructor(
    private authService: AuthenticationService, public navCtrl: NavController
  ) { this.date = moment(); }
  /* Show date and time */
currDate: any = new Date().toISOString();
ngOnInit() {
  }
logoutUser(){
  this.authService.logout();
}
}
