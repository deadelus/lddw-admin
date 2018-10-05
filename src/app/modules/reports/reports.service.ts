import { Injectable } from '@angular/core';
import { ApiService } from '../../commons/api.service';

const reports_path = 'reports';

@Injectable()
export class ReportsService {

  constructor(
    private _apiService: ApiService
  ) { }

  getReportsList() {
    return this._apiService.get(reports_path);
  }
}
