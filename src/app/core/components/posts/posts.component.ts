import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
  posts;
  constructor(private http: HttpClient, private router: Router, private activateRoute: ActivatedRoute,
    private postsService: PostsService) { }

  ngOnInit() {
    this.postsService.getAllPosts().subscribe(res => {
      this.posts = res;
    });
    // this.http.get('https://jsonplaceholder.typicode.com/posts').subscribe(res => {
    //   this.posts = res;
    // });
  }
  navigateToDetails(event) {
    console.log(event.id);
    this.router.navigate([event.id], { relativeTo: this.activateRoute });
  }
  addPost() {
    this.router.navigate(['add-post'], { relativeTo: this.activateRoute });
  }
  deletePostWithId(id) {
    this.postsService.deletePostByID(id).subscribe(res => {
      console.log(res);
    });
  }
  getCommentsByID(id) {
    this.router.navigate(['comments/' + id], { relativeTo: this.activateRoute });
  }
}
