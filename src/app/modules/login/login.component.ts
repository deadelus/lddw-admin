import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../commons/api.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
    this.logUser();
  }

  logUser() {
    this._apiService.post('login', {
      'email': 'admin@admin.com',
      'password': 'admin'
    }).subscribe(
      res => {
        localStorage.setItem('logged', 'true');
        localStorage.setItem('token', res.accessToken);
      },
      error => {
        console.log('error');
      }
    );
  }

}
