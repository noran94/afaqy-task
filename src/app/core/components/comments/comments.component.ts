import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { CommentsService } from './services/comments.service';
import { PostsService } from '../posts/services/posts.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  id;
  comments;
  post;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient,
    private commentService: CommentsService,private postsService:PostsService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    let params = new HttpParams();
    params = params.set('postId', this.id);
    this.postsService.getPostByID(this.id).subscribe(res => {
      this.post = res;
    });
    this.commentService.getCommentsByPostID(params).subscribe(res => {
      this.comments = res;
    });
  }
}
