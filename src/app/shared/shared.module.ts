import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostComponent } from './components/post/post.component';
import { CommentComponent } from './components/comment/comment.component';
import { TranslateSharedModule } from '../translate-shared/translate-shared.module';

@NgModule({
  declarations: [PostComponent, CommentComponent],
  imports: [
    CommonModule,
    TranslateSharedModule
  ],
  exports:[
    PostComponent,
    CommentComponent
  ]

})
export class SharedModule { }
