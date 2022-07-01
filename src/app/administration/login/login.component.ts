import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  form = new FormGroup(
    {
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    }
  )

  constructor(private router:Router) {

  }

  get username() {
    return this.form.controls['username'];
  }

  get password() {
    return this.form.controls['password'];
  }

  sendLoginRequest() {
    if(this.form.valid) {
      if(this.username.value == "empee" && this.password.value == "admin") {
        this.router.navigateByUrl("/administration/home")
      }
    }
  }
  

}
