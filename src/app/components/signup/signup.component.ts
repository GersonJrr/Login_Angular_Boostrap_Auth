import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "icon-eye";
  email:string = "email";
  constructor() { }

  ngOnInit(): void {
  }


  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon = "icon-eye" : this.eyeIcon = "icon-eye";
    this.isText ? this.type = "text" : this.type = "password";
    
  }

}
