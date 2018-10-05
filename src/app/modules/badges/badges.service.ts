import { Injectable } from '@angular/core';
import { ApiService } from '../../commons/api.service';

const badges_path = 'badges';

@Injectable()
export class BadgesService {

  constructor(private _apiService: ApiService) { }

  getBadgesList() {
    return this._apiService.get(badges_path);
  }
}
