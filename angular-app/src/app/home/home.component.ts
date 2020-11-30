import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  API_URL = "http://localhost:3000"
  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }
  signIn() {
    this.http.get(this.API_URL + '/token/sign')
      .subscribe(
        (res) => {
          console.log(res);
          if (res['token']) {
            localStorage.setItem('token', res['token']);
          }
        },
        (err) => {
          console.log(err);
        }
      );    
  }
 
  getPath() {
    this.http.get(this.API_URL + '/path1')    
      .subscribe(
        (res) => {
          console.log(res);
        },
        (err) => {
          console.log(err);
        }
      );       
  }
}
