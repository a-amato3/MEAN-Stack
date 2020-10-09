import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { Subject } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class PostsService {
  private posts: Post[] = [];
  private postsUpdated = new Subject<Post[]>();

  constructor(private http: HttpClient) { }

  getPosts(): any {
    this.http.get<{id: string, message: string, posts: Post[]}>('http://localhost:3000/api/posts')
      .subscribe((postData) => {
        this.posts = postData.posts;
        this.postsUpdated.next([...this.posts]);
        }
      );
  }

  getPostUpdateListener(): any {
    return this.postsUpdated.asObservable();
  }

  addPost(title: string, content: string): any {
    const post: Post = {id: null, title, content };
    this.posts.push(post);
    this.postsUpdated.next([...this.posts]);
  }
}
