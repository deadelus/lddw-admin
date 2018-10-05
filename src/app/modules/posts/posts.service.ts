import { Injectable } from '@angular/core';
import { ApiService } from '../../commons/api.service';


const posts_path = "posts";

@Injectable()
export class PostsService {

  constructor(private _apiService: ApiService) { }

  getPostsList() {
    return this._apiService.get(posts_path);
  }

  addPost(data) {
    return this._apiService.post(posts_path, data);
  }
}
