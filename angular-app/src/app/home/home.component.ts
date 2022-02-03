import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  userData:any;
  ID:any;
  Images:any;

  constructor( private http : HttpClient, private route : ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params)=>{
      console.log(params);
      this.ID=params["ID"];
      console.log(this.ID);
    })    
    this.getDataFromAPI();
    console.log(this.userData); 
  }

  getDataFromAPI(){
    return this.http.get(`/api/home/ID:${this.ID}` ).subscribe((response)=>{
      console.log('Rersponse is:'+JSON.stringify(response));
      this.userData=JSON.parse(JSON.stringify(response));
      console.log(this.userData);
    },(error)=>{
      console.error(error);
    })
  }

  uploadImg(event:any){
    if(event.target.files.length>0){
      const file = event.target.files[0];
      this.Images=file;
      console.log(this.Images)
    }
    const formData = new FormData();
    formData.append("image",this.Images);
    console.log(formData);
    return this.http.post(`/api/upload/ID:${this.ID}`, formData).subscribe((response)=>{
      console.log(response);
    },(error)=>{
      console.error(error);
    })
  }

}
