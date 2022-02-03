import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  userData={
    firstname:"",
    lastname:"",
    email:"",
    mobile:"",
    l1_manager:"",
    l2_manager:"",
    dob:"",
    homeTown:"",
    gender:"",
    emp_dept:"",
    password:"",
  }
  userExist=false;

  @ViewChild('f') formData!: NgForm;

  constructor( private http : HttpClient, private router : Router) { }

  submit(){
    this.userData.firstname=this.formData.value.firstname;
    this.userData.lastname=this.formData.value.lastname;
    this.userData.email=this.formData.value.email;
    this.userData.mobile=this.formData.value.mobile;
    this.userData.l1_manager=this.formData.value.l1_manager;
    this.userData.l2_manager=this.formData.value.l2_manager;
    this.userData.dob=this.formData.value.dob;
    this.userData.gender=this.formData.value.gender;
    this.userData.homeTown=this.formData.value.homeTown;
    this.userData.password=this.formData.value.password;
    this.userData.emp_dept=this.formData.value.emp_dept;
    console.log(this.userData);

    this.http.post('/api/register',this.userData).subscribe((result)=>{
        console.warn(result); 
        this.router.navigate(['/login'])
    },(error)=>{
      console.error(error);
      this.userExist=true;
    });
  }

  ngOnInit(): void {
  }


}
