import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-details-update',
  templateUrl: './details-update.component.html',
  styleUrls: ['./details-update.component.css']
})
export class DetailsUpdateComponent implements OnInit {
  updateForm = new FormGroup ({
    firstname:new FormControl(''),
    lastname:new FormControl(''),
    email:new FormControl(''),
    mobile:new FormControl(''),
    l1_manager:new FormControl(''),
    l2_manager:new FormControl(''),
    dob:new FormControl(''),
    hometown:new FormControl(''),
    gender:new FormControl(''),
    emp_dept:new FormControl(''),
    password:new FormControl(''),
    conf_password:new FormControl(' ')
  })
  userData:any;
  ID:any;



  constructor( private http : HttpClient, private route :ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.ID=this.route.snapshot.params['id'] 
    
    this.getDataFromAPI();
    console.log(this.userData); 
  }

  getDataFromAPI(){
    return this.http.get(`/api/home/ID:${this.ID}` ).subscribe((response)=>{
      // console.log('Rersponse is:'+JSON.stringify(response));
      // console.log(this.userData);
      this.userData=JSON.parse(JSON.stringify(response));
      this.updateForm = new FormGroup ({
        firstname:new FormControl(this.userData['firstname']),
        lastname:new FormControl(this.userData['lastname']),
        email:new FormControl(this.userData['email']),
        mobile:new FormControl(this.userData['mobile']),
        l1_manager:new FormControl(this.userData['l1_manager']),
        l2_manager:new FormControl(this.userData['l2_manager']),
        dob:new FormControl(this.userData['dob']),
        hometown:new FormControl(this.userData['hometown']),
        gender:new FormControl(this.userData['gender']),
        emp_dept:new FormControl(this.userData['emp_dept']),
        password:new FormControl(this.userData['password']),
        conf_password:new FormControl(this.userData['conf_password'])
      })
      console.log(this.updateForm.value)
    },(error)=>{
      console.error(error);
    })
  }

  updateData(){
    this.http.post(`/api/update/ID:${this.ID}`,this.updateForm.value).subscribe((result)=>{
      console.warn(result); 

      // this.router.navigate(['/home'])
  },(error)=>{
    console.error(error);
  });
  }
}

