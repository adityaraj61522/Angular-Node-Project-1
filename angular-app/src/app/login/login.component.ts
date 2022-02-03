import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginData={
    email:"",
    password:""
  }

  responseData : any;
  url="/home?ID=";
  correctPassword=true;

  @ViewChild('f') logFormData!:NgForm;

  constructor( private http : HttpClient, private router : Router) { }

  submit(){
    this.loginData.email=this.logFormData.value.email;
    this.loginData.password=this.logFormData.value.password;
    console.log(this.loginData);
    this.http.post(`/api/login`,this.loginData).subscribe((result)=>{
      console.warn(JSON.stringify(result)); 
      this.responseData=JSON.parse(JSON.stringify(result));
      this.router.navigate(
        ['/home'],
        { queryParams: { ID: `${this.responseData.id }`} }
      );
      console.log(this.responseData.id);
    },(error)=>{
      console.error(error);
      this.correctPassword=false;
    });
      
  }

  ngOnInit(): void {
  }

}
