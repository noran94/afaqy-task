import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  constructor(private http: HttpClient) { }
  getCommentsByPostID(params) {
    return this.http.get(environment.baseURL + 'comments', { params: params });
  }
}
