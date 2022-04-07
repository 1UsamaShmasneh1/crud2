import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _router:Router) { 

  }

  private readonly EMAIL_KEY = 'EMAIL'
  isAuthenticated:boolean = false;

  onLogin(value:any){
    if(value.email === "abc@gmail.com" && value.password === 'a12345'){
      this.isAuthenticated = true
      localStorage.setItem(this.EMAIL_KEY, value.email)
      this._router.navigate(['dashbord'])
    }else{
      this.isAuthenticated = false
    }
  }

  ngOnInit(): void {
  }

}
