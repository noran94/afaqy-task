import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { PostsService } from '../posts/services/posts.service';

@Component({
  selector: 'app-edit-post',
  templateUrl: './add-edit-post.component.html',
  styleUrls: ['./add-edit-post.component.scss']
})
export class AddEditPostComponent implements OnInit {

  post = {};
  id;
  editMode = false;
  constructor(private activateRoute: ActivatedRoute, private http: HttpClient, private router: Router,
    private postsService: PostsService) { }

  ngOnInit() {
    this.id = this.activateRoute.snapshot.paramMap.get('id');
    if (this.id && !isNaN(Number(this.id))) {
      this.editMode = true;
      this.postsService.getPostByID(this.id).subscribe(res => {
        this.post = res;
      });
    }
  }
  onSubmit() {
    if (this.editMode === true) {
      this.postsService.updatePostByID(this.post['id'], this.post).subscribe(res => {
        console.log(res);
        this.router.navigate(['/posts']);
      });
    } else {
      this.postsService.addPost(this.post).subscribe(res => {
        console.log(res);
        this.router.navigate(['/posts']);
      });
    }
  }
}
