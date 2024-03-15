import { Component, OnInit } from '@angular/core';
import { Route } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "icon-eye";
  constructor() { }

  ngOnInit(): void {
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon = "icon-eye" : this.eyeIcon = "icon-eye";
    this.isText ? this.type = "text" : this.type = "password";
    
  }
}
