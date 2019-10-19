import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsComponent } from './components/posts/posts.component';
import { HeaderComponent } from './components/header/header.component';
import { CoreRoutingModule } from './core-routing.module';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FormsModule }      from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { AddEditPostComponent } from './components/add-edit-post/add-edit-post.component';
import { CommentsComponent } from './components/comments/comments.component';
import { TranslateSharedModule } from '../translate-shared/translate-shared.module';


@NgModule({
  declarations: [PostsComponent, HeaderComponent, HomePageComponent, AddEditPostComponent, CommentsComponent],
  imports: [
    CommonModule,
    CoreRoutingModule,
    FormsModule,
    SharedModule,
    TranslateSharedModule
    ]
})
export class CoreModule { }
