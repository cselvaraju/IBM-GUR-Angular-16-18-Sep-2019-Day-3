import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post';
import { PostService } from '../../services/post.service';

@Component({
  selector: 'app-postdemo',
  templateUrl: './postdemo.component.html',
  styleUrls: ['./postdemo.component.css']
})
export class PostdemoComponent implements OnInit {

  postList;
  loading: boolean;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postList = [];
    this.loading = false;
  }

  getPosts() {
    this.loading = true;
    this.postList = null;
    this.postService.getAllPosts().subscribe(
      data => {
        this.postList = data;
        this.loading = false;
      }
    );
  }

  createPost() {
    const post: Post = {
      id: null,
      title: 'New blog title',
      body: 'This is my new blog post'
    };
    this.postService.createPost(post).subscribe(
      data => this.postList.unshift(data)
    );
  }

}
