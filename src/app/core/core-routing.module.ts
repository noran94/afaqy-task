import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './components/posts/posts.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { AddEditPostComponent } from './components/add-edit-post/add-edit-post.component';
import { CommentsComponent } from './components/comments/comments.component';

const routes: Routes = [
    {
        path: '', component: HomePageComponent,
        children: [
            {
                path: 'posts',
                children: [
                    {path: '', component: PostsComponent},
                    {path: ':id', component: AddEditPostComponent},
                    {path: 'add-post', component: AddEditPostComponent},
                    {path: 'comments/:id', component: CommentsComponent}
                ]
            },
            { path: '**', redirectTo: 'posts' },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class CoreRoutingModule { }
