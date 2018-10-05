import { Injectable } from '@angular/core';
import { ApiService } from '../../commons/api.service';


const users_path = 'users';

@Injectable()
export class UsersService {

  constructor(private _apiService: ApiService) { }

  public getUsersList(){
    return this._apiService.get(users_path);
  }
}
