import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeServService {

  constructor( private http : HttpClient) { }

  getUserData(){
    return this.http.get('/api/home/ID=4');
  }
}
