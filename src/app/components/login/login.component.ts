import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { NgToastService } from 'ng-angular-popup';
import ValidateForm from 'src/app/helpers/validateform';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  type:string = "password";
  isText:boolean = false;
  eyeIcon:string = "icon-eye";
  loginForm!:  FormGroup;

  constructor(
    private fb: FormBuilder, 
    private auth:AuthService, 
    private router: Router,
    private toast : NgToastService,
    ) { }

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: ['',Validators.required],
      senha:['',Validators.required],
    })
  }

  hideShowPass(){
    this.isText=!this.isText;
    this.isText ? this.eyeIcon = "icon-eye" : this.eyeIcon = "icon-eye";
    this.isText ? this.type = "text" : this.type = "password";
  }

  onLogin(){
    if(this.loginForm.valid){
      //Send the obj to database
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value).subscribe({

        next:(res)=>{
         console.log(res.message);
          this.loginForm.reset();
          alert(res.message);
          this.toast.success({detail:"Sucesso", summary:res.message, duration:5000});
          this.router.navigate(["home"])
        },
        error:(err)=>{
          this.toast.error({detail:"Erro", summary:"Algo esta errado!", duration:5000});
          console.log(err);
        }
      })

    }else{

      
      ValidateForm.validateAllFormFields(this.loginForm);
      

      //throw the error using toaster and with required fields
    }
  }

}
