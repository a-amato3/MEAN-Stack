import { Component, Output, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PostsService } from '../posts.service';
@Component({
  selector: `app-post-create`,
  templateUrl: `./post-create.component.html`,
  styleUrls: [`./post-create.component.scss`]
})
export class PostCreateComponent {
  enteredContent = ``;
  enteredTitle = ``;

  constructor(private postService: PostsService) { }

  onAddPost(form: NgForm): any {
    if (form.invalid){
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}
