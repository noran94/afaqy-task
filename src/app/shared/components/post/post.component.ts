import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {
  @Input() post;
  @Input() fromComments = false;
  @Output() postDetails: EventEmitter<any> = new EventEmitter();
  @Output() postID: EventEmitter<any> = new EventEmitter();
  @Output() getComments: EventEmitter<any> = new EventEmitter();
  constructor(private translate:TranslateService) { }

  ngOnInit() {
  }

  getPostId(post) {
    this.postDetails.emit(post);
  }
  deletePost(post) {
    this.postID.emit(post.id);
  }
  navigateToComment(post) {
    this.getComments.emit(post.id);
  }
}
