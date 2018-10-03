import { Injectable } from '@angular/core';
import { ApiService } from '../../commons/api.service';

@Injectable()
export class UsersService {

  constructor(private _apiService: ApiService) { }

  users_path = 'users'

  getUsersList(){
    return this._apiService.get(this.users_path);
  }
}
