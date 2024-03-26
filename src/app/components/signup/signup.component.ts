import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';

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
  signUpForm!:FormGroup;
  

  constructor(private fb: FormBuilder, private auth: AuthService, private router :Router) { }

  ngOnInit(): void {
    this.signUpForm = this.fb.group({
      Usuario:['',Validators.required],
      Nome:['',Validators.required],
      Email:['',Validators.required],
      CPF:['',Validators.required],
      Senha:['',Validators.required],
    })
  }


  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon = "icon-eye" : this.eyeIcon = "icon-eye";
    this.isText ? this.type = "text" : this.type = "password";
    
  }
  onSignUp(){
    if(this.signUpForm.valid){
      
      this.auth.signUp(this.signUpForm.value).subscribe({
        next:(res=>{
          alert(res.message)
          this.signUpForm.reset();
          this.router.navigate(["login"]);
        })
        ,error:(err=>{
          alert(err?.error.message)
        })
      })
      
    }else{

      ValidateForm.validateAllFormFields(this.signUpForm);
      alert("Credenciais inválidas");

    
    }
  }
 

}
