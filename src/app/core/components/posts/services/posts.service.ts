import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) { }
  getPostByID(id) {
    return this.http.get(environment.baseURL + "posts/" + id);
  }
  updatePostByID(id, params) {
    return this.http.put(environment.baseURL + "posts/" + id, params);
  }
  addPost(params) {
    return this.http.post(environment.baseURL + "posts", params);
  }
  getAllPosts() {
    return this.http.get(environment.baseURL + "posts");
  }
  deletePostByID(id) {
    return this.http.delete(environment.baseURL + 'posts/' + id);
  }
}
