import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NotificationsComponent } from 'app/notifications/notifications.component';
import { AuthentificationService } from 'app/service/authentification.service';
import  * as $ from "jquery";
@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  cin = ''
  passwd = ''
  invalidLogin = false
    t="";
  constructor(private router: Router,
    private loginservice: AuthentificationService , private notification:NotificationsComponent ) { }

  ngOnInit() {
  }

  checkLogin() {
    this.loginservice.authenticate(this.cin, this.passwd);
  
  }

  
}
